# KAMF 2026 Mobile PWA

2026 KAMF 최신 PRD를 기준으로 구성한 React + TypeScript + Emotion 기반 모바일 PWA입니다.

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 주요 화면

- Splash
- Home: 축제 요약, NOW PLAYING, 바로가기, KAMF 소개, 굿즈 교환 bottom sheet
- 공연 일정: 초청 가수 / 오픈스테이지 / 오픈버스킹을 한 화면에서 전환
- 공연 정보: 별도 빈 상세 페이지 대신 bottom sheet
- KAMF 소개
- 전체 배치도: 모바일 폭 안에 전체 SVG 배치도 표시, 카테고리 범례, 클릭형 booth bottom sheet
- 부스 리스트: 검색/카테고리 필터, 상세 bottom sheet
- 더보기: 문의하기 / 앱 정보 / 공유하기

## 데이터

`.env.example`을 `.env`로 복사하고 Supabase 값을 입력하면 DB 조회를 사용합니다. 값이 없거나 DB가 비어 있으면 `src/data/mock.ts`의 2026 PRD 데이터가 표시됩니다.

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

DB 테이블은 `supabase/schema.sql`을 Supabase SQL Editor에서 실행해 만들 수 있습니다.

## 디자인

- KAMF Now Playing 시안의 크림/베이지/버건디/차콜 레코드 테마
- 제목: Gowun Batang 웹폰트
- 본문: Noto Sans KR 웹폰트
- 폰트 파일은 프로젝트에 포함하지 않고 Google Fonts를 통해 로드합니다.
- 앱 콘텐츠 최대 폭 430px, 배치도는 SVG viewBox로 가로 스크롤 없이 축소됩니다.

## 업데이트할 부분

PRD에 실제 연락처/공식 인스타그램 URL이 명시되지 않아 `ContactPage.tsx`에는 교체 가능한 placeholder가 있습니다.
24~30 야시장 및 F1~F14 푸드트럭은 배치도에는 표시되지만 PRD에 상세 이름이 없어 기본 안내 문구로 표시합니다.
