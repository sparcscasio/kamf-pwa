export type Locale = 'ko' | 'en';

/**
 * 기존 화면에서 사용하는
 * Korean -> English translation table.
 *
 * 기존 한국어 원문을 그대로 유지하면서
 * 영어 locale에서 렌더링된 문자열만 변환하기 위한 테이블입니다.
 */
export const KO_EN: Record<string, string> = {
  // Navigation / common
  '홈': 'Home',
  '공연': 'Schedule',
  '공연 일정': 'Performance Schedule',
  '배치도': 'Map',
  'KAMF 배치도': 'KAMF Map',
  '부스': 'Booths',
  '부스 리스트': 'Booth List',
  '더보기': 'More',
  '뒤로': 'Back',
  '닫기': 'Close',
  '전체': 'All',
  '검색': 'Search',
  '위치': 'Location',
  '운영 단체': 'Organizer',
  '운영': 'Organizer',
  '부스 방문': 'Booth visits',
  '개': '',

  // Header / accessibility
  '언어 변경': 'Change language',
  '영어로 보기': 'View in English',
  '한국어로 보기': 'View in Korean',

  // Home
  '2026 KAMF 공연 일정':
    '2026 KAMF Performance Schedule',

  '9월 10일부터 12일까지의 무대를 확인하세요.':
    'Check out the performances from September 10 to 12.',

  'KAMF 소개': 'About KAMF',

  '2026 KAMF를 소개합니다':
    'Introducing 2026 KAMF',

  '2012년부터 이어진 KAIST 대표 음악 예술 축제. 올해는 공연을 넘어 다양한 프로그램이 이어지는 ‘축제 주간’으로 확장됩니다.':
    'KAIST’s signature music and arts festival, held since 2012. This year, KAMF expands beyond performances into a full Festival Week with a variety of programs.',

  '굿즈 교환 조건':
    'Merch Exchange',

  '굿즈 & 스티커 교환':
    'Merch & Sticker Exchange',

  '부스에 참여하고 스티커를 모아 굿즈와 교환하세요. 창의학습관 옆 인포부스에서 교환할 수 있습니다.':
    'Visit booths, collect stickers, and exchange them for KAMF merchandise at the Info Booth next to E11.',

  // Festival metadata
  '2026.09.10(목) - 09.12(토)':
    '2026.09.10 (Thu) - 09.12 (Sat)',

  '09.11(금) - 09.12(토)':
    '09.11 (Fri) - 09.12 (Sat)',

  'KAIST 잔디광장 및 신학관 앞 오픈스페이스':
    'KAIST Lawn Plaza & Open Space in front of E11',

  '잔디광장':
    'Lawn Plaza',

  '창의학습관':
    'Creative Learning Building',

  '(신학관)':
    '(E11)',

  '학술문화관':
    'Academic Cultural Complex',

  '학술문화관 방향':
    'To Academic Cultural Complex',

  '무대':
    'Stage',

  '카이존':
    'KAI Zone',

  '야시장 · 푸드트럭 구역':
    'Night Market · Food Truck Area',

  '부스 리스트에서 찾아보기':
    'Browse Booth List',

  // Performance categories / schedule
  '초청 가수':
    'Invited Artists',

  '오픈스테이지':
    'Open Stage',

  '오픈버스킹':
    'Open Busking',

  '메인 무대':
    'Main Stage',

  '신학관 앞 오픈스페이스':
    'Open Space in front of E11',

  '장소 · 신학관 앞 오픈스페이스 / 09.10(목) 17:00부터':
    'Venue · Open Space in front of E11 / Sep. 10 (Thu), from 17:00',

  '(목)': '(Thu)',
  '(금)': '(Fri)',
  '(토)': '(Sat)',

  '공식 YouTube 채널이 없습니다.':
    'No official YouTube channel is available.',

  // Performers / teams
  '뎁트': 'Dept',
  '이예준': 'Lee Ye-jun',
  '김뜻돌': 'Meaningful Stone',
  '리도어': 'Redoor',
  '노브레인': 'No Brain',
  '엔플라잉': 'N.Flying',
  '별은': 'Byeol Eun',
  '예빛': 'Yebit',
  '데이먼스이어': 'Damons Year',
  '너드커넥션': 'Nerd Connection',
  '체리필터': 'Cherry Filter',

  '망고시루':
    'Mango Siru',

  '동틀무렵':
    'Twilight',

  '애드립':
    'Ad-lib',

  '강적':
    'KangJeok',

  '인피니트':
    'Infinite',

  '코러스를 삼킨 보아뱀':
    'The Boa That Swallowed the Chorus',

  '졸속밴드':
    'Jolsok Band',

  '브로콜리넘어져':
    'Broccoli Fell Over',

  '매미는맴맴':
    'Cicadas Go Maem-Maem',

  'RC/LC':
    'RC/LC',

  'Aim for 지혜':
    'Aim for Jihye',

  '토하고 더마시자':
    'Throw Up and Drink More',

  '채수윤':
    'Chae Su-yoon',

  '다시, 문짝':
    'Re, Door',

  '여섯줄':
    'Sixline',

  'HUG 라이브 버스킹':
    'HUG Live Busking',

  // Performance descriptions
  'Aim4 연구실 신지혜입니다. 밝고 즐거운 뮤지컬 노래로 가득 채워봤습니다!':
    'I’m Shin Jihye from the Aim4 Lab. I’ve prepared a set full of bright and cheerful musical numbers!',

  '카이스트 최강 펑크락 td 새내기, 토하고 더마시자':
    'KAIST’s fiercest punk-rock band TD’s freshman, Throw Up and Drink More.',

  '대학원 다니면서 노래하고 음악하고 있는 채수윤입니다! 온전히 쉬어 가실 수 있는 10분을 선물할 수 있었으면 좋겠습니다!':
    'I’m Chae Su-yoon, a graduate student who sings and makes music. I hope these ten minutes can give you a genuine moment to rest.',

  '밴드 리도어 커버 밴드 다시, 문짝 팀입니다! 자연 속 고요함을 담고 있는 리도어 노래와 함께 아름다운 밤 보내시길 바랍니다!':
    'We are Re, Door, a Redoor cover band. Enjoy a beautiful evening with Redoor songs that carry the calm of nature.',

  '카이스트 최고의 보컬음악 동아리 여섯줄입니다! 여섯줄만의 색깔이 담긴 노래로 가을을 맞이해보아요!':
    'We are Sixline, KAIST’s vocal music club. Welcome autumn with songs colored by our own unique sound!',

  '오픈버스킹 2부 무대는 카이스트 버스킹 동아리 HUG가 함께합니다! 약 1시간 동안 펼쳐지는 라이브 버스킹과 함께 전야제의 저녁 분위기를 즐겨보세요!':
    'Part 2 of Open Busking features KAIST busking club HUG. Enjoy the pre-festival evening with about an hour of live busking!',

  '대전명물망고시루펑크락이나가신다길을비켜라':
    'Daejeon’s famous Mango Siru punk rock is coming through—make way!',

  '카이스트 우주최강 모던락 밴드 동틀무렵입니다! KAMF에 뜨거운 에너지를 불어넣어줄 무대 보여드리겠습니다!':
    'We are Twilight, KAIST’s modern-rock GOAT! We’re bringing a stage full of energy to KAMF!',

  '저희 밴드 이름은 애드립입니다. 절대 틀린 게 아니라, 애드립입니다.':
    'Our band is called Ad-lib. No, that is not a typo—it really is Ad-lib.',

  '카이스트 No.1 하드락 밴드 강적입니다! 강렬한 에너지로 심장을 뜨겁게 달굴 준비 되셨나요?':
    'We are KangJeok, KAIST’s No.1 hard-rock band! Are you ready for an explosive set that will set your heart on fire?',

  '여러분의 최애 메탈 밴드 인피니트입니다! 강렬하고 파워풀한 사운드로 무더위를 시원하게 날려드리겠습니다!':
    'We are Infinite, your favorite metal band! We’ll blast away the heat with a powerful, intense sound.',

  '목소리로 무대를 채우는 6인조 아카펠라! 여러분의 가을에 잊지 못할 하모니를 선물합니다.':
    'A six-member a cappella group filling the stage with voices alone. We’ll bring an unforgettable harmony to your autumn.',

  '졸속[拙速] : 일을 지나치게 빨리 서둘러서 어설프고 서투름. 안녕하세요. 저희는 졸속밴드입니다.':
    'Jolsok [拙速]: doing something too quickly, leaving it rough and imperfect. Hello, we are Jolsok Band.',

  '너마저 넘어져':
    'Even you fell over.',

  '매미는 맴..맴..하고 웁니다…':
    'Cicadas cry maem… maem…',

  '동신과고 졸업생 하드록•메탈 밴드 RC//LC입니다🔥':
    'We are RC//LC, a hard-rock and metal band formed by Dongshin Science High School alumni. 🔥',

  // About page
  '2012년 처음 시작된 KAMF는 KAIST Art & Music Festival의 약자로, KAIST 학생들이 직접 기획하고 만들어가는 KAIST의 대표 음악 예술 축제입니다. 코로나19로 인해 진행되지 못했던 2년을 제외하고 매년 꾸준히 이어져 왔으며, 올해로 총 13회를 맞이하였습니다.':
    'KAMF, short for KAIST Art & Music Festival, began in 2012 and is KAIST’s signature music and arts festival planned and organized by students. Except for two years when it could not be held due to COVID-19, it has continued every year and celebrates its 13th edition in 2026.',

  'KAMF는 다양한 인디 뮤지션들의 공연과 함께 KAIST 학우들이 직접 참여하는 버스킹, 오픈 스테이지, 체험 부스, 푸드트럭 등 여러 프로그램으로 구성되어 있습니다. 단순한 공연 관람을 넘어 음악과 예술을 통해 학우들이 함께 어울리고 즐길 수 있는 축제를 지향하고 있습니다.':
    'KAMF features performances by a wide range of indie musicians as well as busking, Open Stage performances, hands-on booths, food trucks, and other programs involving KAIST students. Beyond simply watching performances, KAMF aims to create a festival where people can connect and have fun together through music and art.',

  '매년 약 1만여 명의 KAIST 구성원 및 대전 시민들이 함께 참여하며, KAIST를 대표하는 가을 문화 축제로 자리잡고 있습니다.':
    'Around 10,000 KAIST members and Daejeon residents take part each year, making KAMF one of KAIST’s signature autumn cultural festivals.',

  "이번 KAMF는 기존의 공연 중심 축제에서 더 나아가 축제 기간 전체를 함께 즐길 수 있는 '축제 주간'을 새롭게 운영합니다. 원데이클래스, 연사 초청 강연, 외부 부스 초청, 오픈버스킹 신설 등 다양한 프로그램을 통해 공연 외에도 여러 방식으로 축제를 즐기고 참여할 수 있도록 준비했습니다.":
    'This year, KAMF goes beyond a performance-centered festival with a new Festival Week designed to be enjoyed throughout the entire event period. One-day classes, guest lectures, invited external booths, and the new Open Busking program offer many different ways to take part beyond the main performances.',

  '음악과 예술로 함께 만드는 KAIST의 가을':
    'KAIST Autumn, Made Together Through Music and Art',

  'KAMF란?':
    'What is KAMF?',

  '첫 시작':
    'First held',

  '13회':
    '13th',

  '2026 기준':
    'As of 2026',

  '연간 참여':
    'Annual visitors',

  '약 1만':
    '10K+',

  // Booth categories
  '인포 / 자체부스':
    'Info / KAMF Booth',

  '인포·자체':
    'Info',

  '후원부스':
    'Sponsor Booth',

  '후원':
    'Sponsor',

  '초청부스':
    'Invited Booth',

  '초청':
    'Invited',

  '학생부스':
    'Student Booth',

  '학생':
    'Student',

  '야시장부스':
    'Night Market Booth',

  '야시장':
    'Night Market',

  '푸드트럭':
    'Food Truck',

  // Booth list UI
  '부스명, 단체명, 번호 검색':
    'Search booth, organization, or number',

  '세부 부스 정보는 현장 안내에 따라 업데이트됩니다.':
    'Detailed booth information will be updated based on on-site announcements.',

  '푸드트럭 상세 정보는 현장 안내에 따라 업데이트됩니다.':
    'Food truck details will be updated based on on-site announcements.',

  // Booths
  '인포부스':
    'Info Booth',

  'KAMF 외부 기획단':
    'KAMF External Planning Team',

  '행사 안내와 굿즈 교환을 위한 인포부스입니다.':
    'The Info Booth provides festival information and merchandise exchange.',

  '창의학습관 옆':
    'Next to E11',

  '밝은눈안과':
    'Bright Eye Clinic',

  '밝은눈안과 후원부스':
    'Bright Eye Clinic Sponsor Booth',

  '플리마켓':
    'Flea Market',

  '플리마켓 부스':
    'Flea Market Booth',

  'TSAK의 태국 밀크티와 핑크 밀크, 치즈케이크':
    'Thai milk tea, pink milk, and cheesecake by TSAK',

  '엣지의 타코야끼':
    'Takoyaki by EDGE',

  '칼디의 커피와 라떼, 자체 제작 음료수':
    'Coffee, lattes, and original drinks by KALDI',

  '열정부':
    'Passion Department',

  '열정부의 회지 및 굿즈 전시/판매와 키링 만들기 체험':
    'Zines and merchandise by Passion Department, plus a keyring-making activity',

  '캄기단이 준비한 체험부스':
    'A hands-on activity booth prepared by the KAMF planning team',

  'TRON 후원부스':
    'TRON Sponsor Booth',

  '새내기학생회':
    'Freshman Student Council',

  '새내기학생회의 와플':
    'Waffles by the Freshman Student Council',

  '씨드의 파르페와 음료':
    'Parfaits and drinks by SEED',

  '검우회':
    'KAIST Kumdo Club',

  '검우회의 검도 머리치기 체험과 빙수':
    'Kendo head-strike experience and shaved ice by KAIST Kumdo Club',

  '과기원신문 빙과국 KAIST Times Scoop Bureau':
    'KAIST Times Scoop Bureau',

  '카이스트신문의 빈티지 신문 제작 체험과 과자 아이스크림':
    'Vintage newspaper-making activity and snack ice cream by KAIST Times',

  '전산학부 집행위원회':
    'KAIST SoC Student Council',

  '전산학부 집행위원회의 모션 인식 러닝 액션 게임과 슬러시':
    'Motion-recognition running action game and slushies by the SoC Student Council',

  '그리미주아':
    'Grimijua',

  '그리미주아의 헤나 아트, 페이스페인팅':
    'Henna art and face painting by Grimijua',

  '곰발바닥':
    'Gombal',

  '곰발바닥의 체인 팔찌와 슬랑이 제작 체험과 왁뿌볼 판매':
    'Chain bracelet and Slang-i craft activities, plus Wakppubol sales by Gombal',

  '캐리커쳐 초청부스':
    'Caricature Booth (Invited)',

  '슈링크스 키링 제작 초청부스':
    'Shrinkles Keyring-making Booth (Invited)',

  'MPAG 후원부스':
    'MPAG Sponsor Booth',

  '키다리삐에로 풍선 Stilt walker balloon':
    'Stilt Walker Balloon',

  '잔디광장을 돌아다니며 풍선을 불어줍니다':
    'A stilt walker will roam the Lawn Plaza making balloon creations.',

  '잔디광장 순회':
    'Roaming around the Lawn Plaza',

  '야시장 24번':
    'Night Market 24',

  '야시장 25번':
    'Night Market 25',

  '야시장 26번':
    'Night Market 26',

  '야시장 27번':
    'Night Market 27',

  '야시장 28번':
    'Night Market 28',

  '야시장 29번':
    'Night Market 29',

  '야시장 30번':
    'Night Market 30',

  // Goods
  '반다나':
    'Bandana',

  '응원수건':
    'Cheering Towel',

  '키링':
    'Keyring',

  '후원부스 + 오픈스테이지 포함':
    'Includes Sponsor Booth + Open Stage',

  '후원부스 + 자체부스 포함':
    'Includes Sponsor Booth + KAMF Booth',

  '후원부스와 오픈스테이지를 포함해 총 7개의 부스를 방문하면 교환할 수 있습니다.':
    'Exchange after visiting 7 booths in total, including a Sponsor Booth and Open Stage.',

  '후원부스와 자체부스를 포함해 총 5개의 부스를 방문하면 교환할 수 있습니다.':
    'Exchange after visiting 5 booths in total, including a Sponsor Booth and KAMF-operated booth.',

  '총 2개의 부스를 방문하면 교환할 수 있습니다.':
    'Exchange after visiting 2 booths in total.',

  // More page
  'KAMF를 더 편하게 이용하기 위한 기능과 정보를 확인할 수 있습니다.':
    'Find useful features and information for a more convenient KAMF experience.',

  '앱으로 설치하기':
    'Install App',

  '홈 화면에 추가해 KAMF를 앱처럼 이용하세요.':
    'Add KAMF to your Home Screen and use it like an app.',

  '문의하기':
    'Contact',

  'KAMF 공식 Instagram 또는 이메일로 문의할 수 있습니다.':
    'Contact KAMF through the official Instagram account or email.',

  '앱 정보':
    'App Info',

  'KAMF 웹앱과 버전 정보를 확인합니다.':
    'View information about the KAMF web app and its version.',

  '공유하기':
    'Share',

  '친구에게 KAMF를 공유해보세요.':
    'Share KAMF with your friends.',

  // Contact
  'KAMF 행사 관련 문의는 공식 인스타그램 DM 또는 이메일을 통해 보내주세요.':
    'For KAMF inquiries, please contact us through the official Instagram account or email.',

  // App info
  '모바일 PWA':
    'Mobile PWA',

  '브라우저에서 바로 열거나 홈 화면에 추가해 앱처럼 사용할 수 있습니다.':
    'Open KAMF directly in your browser or add it to your Home Screen to use it like an app.',

  // Misc
  '장소':
    'Venue',

  '부터':
    'from',
};

/**
 * 기존 자동 문자열 번역용 entry.
 *
 * 긴 문자열부터 치환해야 짧은 문자열이 먼저 바뀌면서
 * 번역이 깨지는 문제를 줄일 수 있습니다.
 */
const KO_ENTRIES = Object.entries(KO_EN).sort(
  (a, b) => b[0].length - a[0].length,
);

const EN_ENTRIES = Object.entries(KO_EN)
  .filter(([, en]) => en.length > 0)
  .map(([ko, en]) => [en, ko] as const)
  .sort((a, b) => b[0].length - a[0].length);

/**
 * 기존 화면에서 사용하는 자동 문자열 번역 함수.
 *
 * 기존 페이지의 동작을 유지하기 위해 그대로 둡니다.
 */
export function translateString(
  value: string,
  locale: Locale,
): string {
  const entries =
    locale === 'en'
      ? KO_ENTRIES
      : EN_ENTRIES;

  let next = value;

  for (const [from, to] of entries) {
    if (
      from &&
      next.includes(from)
    ) {
      next = next
        .split(from)
        .join(to);
    }
  }

  // Generated booth / food-truck labels
  if (locale === 'en') {
    next = next.replace(
      /야시장\s*(\d+)번/g,
      'Night Market $1',
    );

    next = next.replace(
      /푸드트럭\s*(F\d+)/g,
      'Food Truck $1',
    );
  } else {
    next = next.replace(
      /Night Market\s*(\d+)/g,
      '야시장 $1번',
    );

    next = next.replace(
      /Food Truck\s*(F\d+)/g,
      '푸드트럭 $1',
    );
  }

  return next;
}

/**
 * Key 기반 번역.
 *
 * PwaInstallModal처럼 JSX가 여러 text node로 쪼개지는 UI는
 * 기존 문자열 치환 방식 대신 이 key 방식을 사용합니다.
 */
export const translations: Record<
  Locale,
  Record<string, string>
> = {
  ko: {
    'pwa.title.line1':
      'KAMF를',

    'pwa.title.line2':
      'Home 화면에 담아보세요.',

    'pwa.description':
      'KAMF 웹사이트를 홈 화면에 추가하면 브라우저를 매번 열지 않고 앱처럼 바로 실행할 수 있습니다.',

    'pwa.platform.ios':
      'iPhone / iPad',

    'pwa.platform.android':
      'Android',

    // iOS
    'pwa.ios.notice':
      'Safari에서 KAMF 페이지를 연 뒤 아래 순서대로 진행해주세요.',

    'pwa.ios.step1.title':
      '공유 버튼 누르기',

    'pwa.ios.step1.description':
      'Safari 화면의 공유 아이콘을 눌러주세요.',

    'pwa.ios.step2.title':
      '홈 화면에 추가',

    'pwa.ios.step2.description':
      '공유 메뉴를 아래로 내려 ‘홈 화면에 추가’를 선택해주세요.',

    'pwa.ios.step3.title':
      '추가하기',

    'pwa.ios.step3.description':
      '화면 오른쪽 위의 ‘추가’를 누르면 KAMF가 홈 화면에 생성됩니다.',

    // Android
    'pwa.android.installed':
      'KAMF가 이미 앱 형태로 실행되고 있습니다.',

    'pwa.android.installButton':
      'KAMF 앱 설치하기',

    'pwa.android.notice':
      'Chrome에서 KAMF 페이지를 열고 메뉴에서 설치할 수 있습니다.',

    'pwa.android.step1.title':
      'Chrome 메뉴',

    'pwa.android.step1.description':
      'Chrome 오른쪽 위의 ⋮ 버튼을 눌러주세요.',

    'pwa.android.step2.title':
      '앱 설치',

    'pwa.android.step2.description':
      '메뉴에서 ‘설치 및 바로가기 만들기’ 또는 ‘홈 화면에 추가’를 선택해주세요.',

    'pwa.android.step3.title':
      '설치 완료',

    'pwa.android.step3.description':
      '설치를 승인하면 홈 화면에서 KAMF를 앱처럼 실행할 수 있습니다.',

    'pwa.footnote':
      '브라우저 종류와 OS 버전에 따라 메뉴 이름이나 위치가 조금 다르게 표시될 수 있습니다.',
    'about.title.line1': '2026 KAMF를',
    'about.title.line2': '소개합니다',
  },

  en: {
    'pwa.title.line1':
      'Add KAMF',

    'pwa.title.line2':
      'to your Home Screen.',

    'pwa.description':
      'Add KAMF to your Home Screen to launch it like an app without opening your browser each time.',

    'pwa.platform.ios':
      'iPhone / iPad',

    'pwa.platform.android':
      'Android',

    // iOS
    'pwa.ios.notice':
      'Open the KAMF website in Safari and follow the steps below.',

    'pwa.ios.step1.title':
      'Tap the Share Button',

    'pwa.ios.step1.description':
      'Tap the Share icon in Safari.',

    'pwa.ios.step2.title':
      'Add to Home Screen',

    'pwa.ios.step2.description':
      'Scroll down in the Share menu and select “Add to Home Screen.”',

    'pwa.ios.step3.title':
      'Add',

    'pwa.ios.step3.description':
      'Tap “Add” in the top-right corner to place KAMF on your Home Screen.',

    // Android
    'pwa.android.installed':
      'KAMF is already running in standalone app mode.',

    'pwa.android.installButton':
      'Install KAMF App',

    'pwa.android.notice':
      'Open KAMF in Chrome and install it from the browser menu.',

    'pwa.android.step1.title':
      'Chrome Menu',

    'pwa.android.step1.description':
      'Tap the ⋮ button in the top-right corner of Chrome.',

    'pwa.android.step2.title':
      'Install App',

    'pwa.android.step2.description':
      'Select “Install or create shortcut” or “Add to Home Screen” from the menu.',

    'pwa.android.step3.title':
      'Finish Installation',

    'pwa.android.step3.description':
      'Confirm the installation, then launch KAMF like an app from your Home Screen.',

    'pwa.footnote':
      'Menu names and locations may vary slightly depending on your browser and OS version.',
    'about.title.line1': 'Introducing',
    'about.title.line2': '2026 KAMF',
  },
};

/**
 * t('pwa.xxx') 형식의 symbolic key 번역용 함수.
 */
export function translateKey(
  key: string,
  locale: Locale,
): string {
  return (
    translations[locale][key] ??
    key
  );
}