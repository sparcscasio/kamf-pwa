import { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ExternalLink, Music2, Youtube } from 'lucide-react';

import PageHeader from '@/components/layout/PageHeader';
import BottomSheet from '@/components/common/BottomSheet';
import { Page, Card } from '@/components/common/ui';

import { usePerformances } from '@/hooks/useData';
import { useNow } from '@/hooks/useNow';

import type { Performance, PerformanceType } from '@/types';

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin: 6px 0 12px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 4px;

  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 10px;

  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.paper};

  color: ${({ active, theme }) =>
    active ? '#fff' : theme.colors.ink};

  font-size: 11px;
  font-weight: 800;
`;

const Dates = styled.div`
  display: flex;
  gap: 7px;

  margin-bottom: 14px;

  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateBtn = styled.button<{ active: boolean }>`
  white-space: nowrap;

  padding: 7px 13px;

  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.line};

  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.paper};

  color: ${({ active, theme }) =>
    active ? 'white' : theme.colors.ink};

  font-size: 12px;
  font-weight: 800;
`;

const Venue = styled(Card)`
  padding: 11px 13px;
  margin-bottom: 12px;

  font-size: 11px;

  color: ${({ theme }) => theme.colors.muted};

  box-shadow: none;
`;

const OnAirBanner = styled.button`
  width: 100%;

  margin-bottom: 14px;
  padding: 13px 14px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;

  align-items: center;

  text-align: left;

  border-radius: 13px;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff8ef;
`;

const LivePill = styled.span`
  padding: 4px 7px;

  border-radius: 999px;

  background: #fff8ef;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.06em;
`;

const OnAirText = styled.div`
  min-width: 0;

  b {
    display: block;
    font-size: 13px;
  }

  span {
    display: block;

    margin-top: 2px;

    font-size: 10px;

    opacity: 0.82;
  }
`;

const Row = styled.button<{ live: boolean }>`
  width: 100%;

  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 8px;

  text-align: left;

  margin-bottom: 8px;
`;

const Time = styled.div<{ live: boolean }>`
  padding-top: 13px;

  font-size: 12px;
  font-weight: 800;

  color: ${({ live, theme }) =>
    live ? theme.colors.primary : theme.colors.ink};
`;

const Event = styled(Card)<{ live: boolean }>`
  position: relative;

  padding: 12px 13px;

  box-shadow: none;

  background: ${({ live, theme }) =>
    live ? theme.colors.primary : theme.colors.paper};

  color: ${({ live, theme }) =>
    live ? '#fff' : theme.colors.ink};

  border-color: ${({ live, theme }) =>
    live ? theme.colors.primary : theme.colors.line};

  ${({ live }) =>
    live
      ? `
        box-shadow: 0 7px 22px rgba(127, 30, 30, .18);
        transform: translateY(-1px);
      `
      : ''}
`;

const EventTop = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  gap: 10px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 800;
  line-height: 1.35;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;

  width: fit-content;

  padding: 4px 7px;

  border: 1px solid currentColor;
  border-radius: 999px;

  font-size: 9px;
  font-weight: 800;

  opacity: 0.9;

  white-space: nowrap;
`;

const Meta = styled.div`
  margin-top: 4px;

  font-size: 10px;

  opacity: 0.75;
`;

const SheetHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SheetTitle = styled.h2`
  margin: 16px 0 10px;

  font:
    700 27px/1.2 'Gowun Batang',
    serif;
`;

const SheetMeta = styled.div`
  margin-bottom: 18px;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 12px;
  font-weight: 800;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.ink};

  font-size: 14px;
  line-height: 1.75;
`;

const MusicLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 9px;

  margin-top: 22px;
`;

const MusicLink = styled.a`
  min-height: 48px;

  padding: 11px 10px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.beige};

  color: ${({ theme }) => theme.colors.ink};

  font-size: 11px;
  font-weight: 800;

  transition:
    transform 0.15s ease,
    background 0.15s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const DisabledMusicLink = styled.div`
  min-height: 48px;

  padding: 11px 10px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.beige};

  color: ${({ theme }) => theme.colors.muted};

  font-size: 11px;
  font-weight: 800;

  opacity: 0.45;

  cursor: not-allowed;
`;

const labels: Record<PerformanceType, string> = {
  INVITED_ARTIST: '초청 가수',
  OPEN_STAGE: '오픈스테이지',
  OPEN_BUSKING: '오픈버스킹',
};

const datesByType: Record<PerformanceType, string[]> = {
  INVITED_ARTIST: ['2026-09-11', '2026-09-12'],
  OPEN_STAGE: ['2026-09-11', '2026-09-12'],
  OPEN_BUSKING: ['2026-09-10'],
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

const isLive = (
  performance: Performance,
  now: number,
) => {
  if (!performance.endAt) {
    return false;
  }

  return (
    now >= new Date(performance.startAt).getTime() &&
    now < new Date(performance.endAt).getTime()
  );
};

/**
 * 초청 가수 공식 YouTube 채널
 *
 * 공식 채널이 없는 가수는 여기에 추가하지 않으면 된다.
 * 해당 경우 상세 팝업의 YouTube 버튼이 자동으로 disabled 처리된다.
 */
const youtubeProfiles: Partial<Record<string, string>> = {
  뎁트: 'https://www.youtube.com/@dept113',

  이예준:
    'https://www.youtube.com/channel/UCVm0PGSaH2Rv96_3kiBS7og',

  김뜻돌:
    'https://www.youtube.com/channel/UCIUbXhcpDmWajKpB7rOZcmg',

  리도어:
    'https://www.youtube.com/channel/UCYVJcQTELkYJmUsHCskv94Q',

  노브레인:
    'https://www.youtube.com/channel/UCGPvIaYhnCk5Ks9nqIJyGqg',

  엔플라잉:
    'https://www.youtube.com/channel/UC8vm0EzlH9mRHwnTLILpQjQ',

  별은:
    'https://www.youtube.com/channel/UCPZ2XXfOWDXi7dGlQSOt5IQ',

  예빛:
    'https://www.youtube.com/channel/UCmE0RiW8jsvY3DnXVJI1EUg',

  데이먼스이어:
    'https://www.youtube.com/channel/UCsh9SN6pOoTAx5-ZU0WcsIQ',

  너드커넥션:
    'https://www.youtube.com/channel/UCgI0yyuYZGo2iqlBk-Rn8YQ',

  체리필터:
    'https://www.youtube.com/channel/UCKTD_Rh7yAD5x9Snt4ZSJsw',
};

/**
 * Spotify 공식 프로필
 *
 * 기존 최종 버전의 값을 그대로 유지.
 */
const verifiedSpotifyProfiles: Partial<
  Record<string, string>
> = {
  뎁트:
    'https://open.spotify.com/artist/48JtfAggQQpfUXQNxkGm5U',

  이예준:
    'https://open.spotify.com/artist/0pi0UqDbdqphea7hTxQyby',

  김뜻돌:
    'https://open.spotify.com/artist/2U7E2JAd6S4zDGRPGNJ27S',

  엔플라잉:
    'https://open.spotify.com/artist/2ZmXexIJAD7PgABrj0qQRb',

  별은:
    'https://open.spotify.com/artist/6PlVpPXatgot82WQgqM6S2',

  예빛:
    'https://open.spotify.com/artist/7zdCvtTQdMCj37CuQxkyQf',

  데이먼스이어:
    'https://open.spotify.com/artist/2T5KKZuEEudb7alCJ1pCus',

  너드커넥션:
    'https://open.spotify.com/artist/5WKUZJPvN1SScyggtPFShK',

  체리필터:
    'https://open.spotify.com/artist/3uk3Jz2yT37niCo3c5GMf2',
    
  노브레인:
    'https://open.spotify.com/artist/6keuCA49b9am8lisSodCh7'
};

const spotifyUrl = (artist: string) =>
  verifiedSpotifyProfiles[artist] ??
  `https://open.spotify.com/search/${encodeURIComponent(
    artist,
  )}`;

export default function PerformancePage() {
  const { data: performances = [] } =
    usePerformances();

  const now = useNow();

  const [type, setType] =
    useState<PerformanceType>('INVITED_ARTIST');

  const [date, setDate] =
    useState('2026-09-11');

  const [selected, setSelected] =
    useState<Performance | null>(null);

  const focusedLiveOnce = useRef(false);

  const currentLive = useMemo(
    () =>
      performances.find((performance) =>
        isLive(performance, now),
      ) ?? null,
    [performances, now],
  );

  useEffect(() => {
    if (
      !currentLive ||
      focusedLiveOnce.current
    ) {
      return;
    }

    setType(currentLive.type);
    setDate(currentLive.date);

    focusedLiveOnce.current = true;
  }, [currentLive]);

  const list = useMemo(
    () =>
      performances.filter(
        (performance) =>
          performance.type === type &&
          performance.date === date,
      ),
    [type, date, performances],
  );

  const changeType = (
    nextType: PerformanceType,
  ) => {
    setType(nextType);

    setDate(datesByType[nextType][0]);
  };

  return (
    <Page>
      <PageHeader title="공연 일정" />

      {currentLive && (
        <OnAirBanner
          onClick={() => {
            setType(currentLive.type);
            setDate(currentLive.date);
            setSelected(currentLive);
          }}
        >
          <LivePill>ON AIR</LivePill>

          <OnAirText>
            <b>{currentLive.title}</b>

            <span>
              {fmt(currentLive.startAt)} ·{' '}
              {currentLive.stage}
            </span>
          </OnAirText>

          <Music2 size={18} />
        </OnAirBanner>
      )}

      <Tabs>
        {(
          Object.keys(
            labels,
          ) as PerformanceType[]
        ).map((tabType) => (
          <Tab
            key={tabType}
            active={type === tabType}
            onClick={() =>
              changeType(tabType)
            }
          >
            {labels[tabType]}
          </Tab>
        ))}
      </Tabs>

      <Dates>
        {datesByType[type].map((day) => (
          <DateBtn
            key={day}
            active={date === day}
            onClick={() => setDate(day)}
          >
            {day.slice(5).replace('-', '.')}{' '}

            {day === '2026-09-10'
              ? '(목)'
              : day === '2026-09-11'
                ? '(금)'
                : '(토)'}
          </DateBtn>
        ))}
      </Dates>

      {type === 'OPEN_BUSKING' && (
        <Venue>
          장소 · 신학관 앞 오픈스페이스 /
          09.10(목) 17:00부터
        </Venue>
      )}

      {list.map((performance) => {
        const live = isLive(
          performance,
          now,
        );

        return (
          <Row
            key={performance.id}
            live={live}
            onClick={() =>
              setSelected(performance)
            }
          >
            <Time live={live}>
              {fmt(performance.startAt)}
            </Time>

            <Event live={live}>
              <EventTop>
                <Name>
                  {performance.title}
                </Name>

                <Tag>
                  {live
                    ? 'ON AIR'
                    : labels[
                        performance.type
                      ]}
                </Tag>
              </EventTop>

              <Meta>
                {performance.part
                  ? `${performance.part} · `
                  : ''}

                {performance.stage}

                {performance.endAt
                  ? ` · ${fmt(
                      performance.startAt,
                    )}-${fmt(
                      performance.endAt,
                    )}`
                  : ''}
              </Meta>
            </Event>
          </Row>
        );
      })}

      {selected && (
        <BottomSheet
          onClose={() => setSelected(null)}
        >
          <SheetHead>
            <Tag
              style={{
                color: '#7F1E1E',
              }}
            >
              {isLive(selected, now)
                ? 'ON AIR · '
                : ''}

              {labels[selected.type]}
            </Tag>

            <SheetTitle>
              {selected.title}
            </SheetTitle>
          </SheetHead>

          <SheetMeta>
            {fmt(selected.startAt)}

            {selected.endAt
              ? ` - ${fmt(selected.endAt)}`
              : ''}

            {' · '}

            {selected.stage}
          </SheetMeta>

          {selected.description && (
            <Desc>
              {selected.description}
            </Desc>
          )}

          {selected.type ===
            'INVITED_ARTIST' && (
            <MusicLinks>
              {youtubeProfiles[
                selected.title
              ] ? (
                <MusicLink
                  href={
                    youtubeProfiles[
                      selected.title
                    ]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube size={15} />

                  YouTube

                  <ExternalLink
                    size={13}
                  />
                </MusicLink>
              ) : (
                <DisabledMusicLink
                  aria-disabled="true"
                  title="공식 YouTube 채널이 없습니다."
                >
                  <Youtube size={15} />

                  YouTube
                </DisabledMusicLink>
              )}

              <MusicLink
                href={spotifyUrl(
                  selected.title,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify

                <ExternalLink size={14} />
              </MusicLink>
            </MusicLinks>
          )}
        </BottomSheet>
      )}
    </Page>
  );
}