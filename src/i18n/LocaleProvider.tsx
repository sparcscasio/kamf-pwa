import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import {
  translateKey,
  translateString,
  type Locale,
} from './translations';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (value: string) => string;
};

const LocaleContext =
  createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'kamf-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'ko';
  }

  const saved =
    window.localStorage.getItem(STORAGE_KEY);

  return saved === 'en'
    ? 'en'
    : 'ko';
}

function translateElement(
  root: ParentNode,
  locale: Locale,
) {
  const walker =
    document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
    );

  const nodes: Text[] = [];

  let current =
    walker.nextNode();

  while (current) {
    nodes.push(
      current as Text,
    );

    current =
      walker.nextNode();
  }

  for (const node of nodes) {
    const parent =
      node.parentElement;

    if (
      !parent ||
      parent.closest(
        'script, style',
      )
    ) {
      continue;
    }

    const translated =
      translateString(
        node.nodeValue ?? '',
        locale,
      );

    if (
      translated !==
      node.nodeValue
    ) {
      node.nodeValue =
        translated;
    }
  }

  if (
    'querySelectorAll' in root
  ) {
    const elements =
      (
        root as ParentNode
      ).querySelectorAll<HTMLElement>(
        '[placeholder], [aria-label], [title], [alt]',
      );

    for (
      const element of elements
    ) {
      for (
        const attr of [
          'placeholder',
          'aria-label',
          'title',
          'alt',
        ]
      ) {
        const value =
          element.getAttribute(
            attr,
          );

        if (!value) {
          continue;
        }

        const translated =
          translateString(
            value,
            locale,
          );

        if (
          translated !== value
        ) {
          element.setAttribute(
            attr,
            translated,
          );
        }
      }
    }
  }
}

export function LocaleProvider({
  children,
}: PropsWithChildren) {
  const [
    locale,
    setLocaleState,
  ] =
    useState<Locale>(
      getInitialLocale,
    );

  const setLocale =
    useCallback(
      (next: Locale) => {
        setLocaleState(next);

        window.localStorage.setItem(
          STORAGE_KEY,
          next,
        );
      },
      [],
    );

  const toggleLocale =
    useCallback(() => {
      setLocale(
        locale === 'ko'
          ? 'en'
          : 'ko',
      );
    }, [
      locale,
      setLocale,
    ]);

  /**
   * t()는 두 가지 번역 방식을 모두 지원한다.
   *
   * 1. symbolic key
   *    t('pwa.title.line1')
   *
   * 2. 기존 한국어 원문
   *    t('공연 일정')
   */
  const t =
    useCallback(
      (value: string) => {
        // key 기반 번역
        if (
          value.includes('.')
        ) {
          return translateKey(
            value,
            locale,
          );
        }

        // 기존 문자열 기반 번역
        return translateString(
          value,
          locale,
        );
      },
      [locale],
    );

  useEffect(() => {
    document.documentElement.lang =
      locale === 'en'
        ? 'en'
        : 'ko';

    const root =
      document.getElementById(
        'root',
      ) ??
      document.body;

    translateElement(
      root,
      locale,
    );

    const observer =
      new MutationObserver(
        (mutations) => {
          observer.disconnect();

          for (
            const mutation of mutations
          ) {
            if (
              mutation.type ===
                'characterData' &&
              mutation.target
                .parentNode
            ) {
              translateElement(
                mutation.target
                  .parentNode,
                locale,
              );
            }

            for (
              const node of mutation.addedNodes
            ) {
              if (
                node.nodeType ===
                  Node.TEXT_NODE &&
                node.parentNode
              ) {
                translateElement(
                  node.parentNode,
                  locale,
                );
              } else if (
                node.nodeType ===
                Node.ELEMENT_NODE
              ) {
                translateElement(
                  node as Element,
                  locale,
                );
              }
            }

            if (
              mutation.type ===
                'attributes' &&
              mutation.target instanceof
                HTMLElement
            ) {
              translateElement(
                mutation.target,
                locale,
              );
            }
          }

          observer.observe(
            root,
            {
              subtree: true,
              childList: true,
              characterData:
                true,
              attributes: true,
              attributeFilter: [
                'placeholder',
                'aria-label',
                'title',
                'alt',
              ],
            },
          );
        },
      );

    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        'placeholder',
        'aria-label',
        'title',
        'alt',
      ],
    });

    return () =>
      observer.disconnect();
  }, [locale]);

  const value =
    useMemo(
      () => ({
        locale,
        setLocale,
        toggleLocale,
        t,
      }),
      [
        locale,
        setLocale,
        toggleLocale,
        t,
      ],
    );

  return (
    <LocaleContext.Provider
      value={value}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context =
    useContext(
      LocaleContext,
    );

  if (!context) {
    throw new Error(
      'useLocale must be used inside LocaleProvider',
    );
  }

  return context;
}