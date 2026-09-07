import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;

  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

function checkStandalone() {
  const standaloneDisplayMode = window.matchMedia(
    '(display-mode: standalone)',
  ).matches;

  const navigatorStandalone =
    'standalone' in window.navigator &&
    Boolean(
      (
        window.navigator as Navigator & {
          standalone?: boolean;
        }
      ).standalone,
    );

  return standaloneDisplayMode || navigatorStandalone;
}

export function usePwaInstall() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isInstalled, setIsInstalled] = useState(
    () => checkStandalone(),
  );

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();

      setInstallPrompt(
        event as BeforeInstallPromptEvent,
      );
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt,
    );

    window.addEventListener(
      'appinstalled',
      handleAppInstalled,
    );

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );

      window.removeEventListener(
        'appinstalled',
        handleAppInstalled,
      );
    };
  }, []);

  const install = async () => {
    if (!installPrompt) {
      return false;
    }

    await installPrompt.prompt();

    const choice =
      await installPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      setInstallPrompt(null);

      return true;
    }

    return false;
  };

  return {
    canInstall: Boolean(installPrompt),
    isInstalled,
    install,
  };
}