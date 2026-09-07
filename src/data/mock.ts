import type { Booth, GoodsItem, Performance } from '@/types';

export const festival = {
  title: '2026 KAMF',
  subtitle: 'KAIST Music Festival',
  dates: '2026.09.10(목) - 09.12(토)',
  mainDates: '09.11(금) - 09.12(토)',
  venue: 'KAIST 잔디광장 및 신학관 앞 오픈스페이스',
};

export const aboutParagraphs = [
  '2012년 처음 시작된 KAMF는 KAIST Art & Music Festival의 약자로, KAIST 학생들이 직접 기획하고 만들어가는 KAIST의 대표 음악 예술 축제입니다. 코로나19로 인해 진행되지 못했던 2년을 제외하고 매년 꾸준히 이어져 왔으며, 올해로 총 13회를 맞이하였습니다.',
  'KAMF는 다양한 인디 뮤지션들의 공연과 함께 KAIST 학우들이 직접 참여하는 버스킹, 오픈 스테이지, 체험 부스, 푸드트럭 등 여러 프로그램으로 구성되어 있습니다. 단순한 공연 관람을 넘어 음악과 예술을 통해 학우들이 함께 어울리고 즐길 수 있는 축제를 지향하고 있습니다.',
  '매년 약 1만여 명의 KAIST 구성원 및 대전 시민들이 함께 참여하며, KAIST를 대표하는 가을 문화 축제로 자리잡고 있습니다.',
  "이번 KAMF는 기존의 공연 중심 축제에서 더 나아가 축제 기간 전체를 함께 즐길 수 있는 '축제 주간'을 새롭게 운영합니다. 원데이클래스, 연사 초청 강연, 외부 부스 초청, 오픈버스킹 신설 등 다양한 프로그램을 통해 공연 외에도 여러 방식으로 축제를 즐기고 참여할 수 있도록 준비했습니다.",
];

export const performances: Performance[] = [
  { id: 'ob-1', title: 'Aim for 지혜', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T17:00:00+09:00', endAt: '2026-09-10T17:10:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.1', description: 'Aim4 연구실 신지혜입니다. 밝고 즐거운 뮤지컬 노래로 가득 채워봤습니다!' },
  { id: 'ob-2', title: '토하고 더마시자', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T17:10:00+09:00', endAt: '2026-09-10T17:20:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.1', description: '카이스트 최강 펑크락 td 새내기, 토하고 더마시자' },
  { id: 'ob-3', title: '채수윤', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T17:20:00+09:00', endAt: '2026-09-10T17:30:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.1', description: '대학원 다니면서 노래하고 음악하고 있는 채수윤입니다! 온전히 쉬어 가실 수 있는 10분을 선물할 수 있었으면 좋겠습니다!' },
  { id: 'ob-4', title: '다시, 문짝', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T17:30:00+09:00', endAt: '2026-09-10T17:40:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.1', description: '밴드 리도어 커버 밴드 다시, 문짝 팀입니다! 자연 속 고요함을 담고 있는 리도어 노래와 함께 아름다운 밤 보내시길 바랍니다!' },
  { id: 'ob-5', title: '여섯줄', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T17:40:00+09:00', endAt: '2026-09-10T17:50:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.1', description: '카이스트 최고의 보컬음악 동아리 여섯줄입니다! 여섯줄만의 색깔이 담긴 노래로 가을을 맞이해보아요!' },
  { id: 'ob-6', title: 'HUG 라이브 버스킹', type: 'OPEN_BUSKING', date: '2026-09-10', startAt: '2026-09-10T18:30:00+09:00', endAt: '2026-09-10T19:30:00+09:00', stage: '신학관 앞 오픈스페이스', part: 'Part.2', description: '오픈버스킹 2부 무대는 카이스트 버스킹 동아리 HUG가 함께합니다! 약 1시간 동안 펼쳐지는 라이브 버스킹과 함께 전야제의 저녁 분위기를 즐겨보세요!' },

  { id: 'os-11-1', title: '망고시루', type: 'OPEN_STAGE', date: '2026-09-11', startAt: '2026-09-11T15:00:00+09:00', endAt: '2026-09-11T15:30:00+09:00', stage: '오픈스테이지', description: '대전명물망고시루펑크락이나가신다길을비켜라' },
  { id: 'os-11-2', title: '동틀무렵', type: 'OPEN_STAGE', date: '2026-09-11', startAt: '2026-09-11T15:30:00+09:00', endAt: '2026-09-11T16:00:00+09:00', stage: '오픈스테이지', description: '카이스트 우주최강 모던락 밴드 동틀무렵입니다! KAMF에 뜨거운 에너지를 불어넣어줄 무대 보여드리겠습니다!' },
  { id: 'os-11-3', title: '애드립', type: 'OPEN_STAGE', date: '2026-09-11', startAt: '2026-09-11T16:00:00+09:00', endAt: '2026-09-11T16:30:00+09:00', stage: '오픈스테이지', description: '저희 밴드 이름은 애드립입니다. 절대 틀린 게 아니라, 애드립입니다.' },
  { id: 'os-11-4', title: '강적', type: 'OPEN_STAGE', date: '2026-09-11', startAt: '2026-09-11T16:30:00+09:00', endAt: '2026-09-11T17:00:00+09:00', stage: '오픈스테이지', description: '카이스트 No.1 하드락 밴드 강적입니다! 강렬한 에너지로 심장을 뜨겁게 달굴 준비 되셨나요?' },
  { id: 'os-11-5', title: '인피니트', type: 'OPEN_STAGE', date: '2026-09-11', startAt: '2026-09-11T17:00:00+09:00', endAt: '2026-09-11T17:30:00+09:00', stage: '오픈스테이지', description: '여러분의 최애 메탈 밴드 인피니트입니다! 강렬하고 파워풀한 사운드로 무더위를 시원하게 날려드리겠습니다!' },

  { id: 'ia-11-1', title: '뎁트', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T18:00:00+09:00', endAt: '2026-09-11T18:30:00+09:00', stage: '메인 무대' },
  { id: 'ia-11-2', title: '이예준', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T18:30:00+09:00', endAt: '2026-09-11T19:00:00+09:00', stage: '메인 무대' },
  { id: 'ia-11-3', title: '김뜻돌', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T19:00:00+09:00', endAt: '2026-09-11T20:10:00+09:00', stage: '메인 무대' },
  { id: 'ia-11-4', title: '리도어', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T20:10:00+09:00', endAt: '2026-09-11T20:50:00+09:00', stage: '메인 무대' },
  { id: 'ia-11-5', title: '노브레인', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T20:50:00+09:00', endAt: '2026-09-11T21:30:00+09:00', stage: '메인 무대' },
  { id: 'ia-11-6', title: '엔플라잉', type: 'INVITED_ARTIST', date: '2026-09-11', startAt: '2026-09-11T21:30:00+09:00', endAt: '2026-09-11T22:10:00+09:00', stage: '메인 무대' },

  { id: 'os-12-1', title: '코러스를 삼킨 보아뱀', type: 'OPEN_STAGE', date: '2026-09-12', startAt: '2026-09-12T15:00:00+09:00', endAt: '2026-09-12T15:30:00+09:00', stage: '오픈스테이지', description: '목소리로 무대를 채우는 6인조 아카펠라! 여러분의 가을에 잊지 못할 하모니를 선물합니다.' },
  { id: 'os-12-2', title: '졸속밴드', type: 'OPEN_STAGE', date: '2026-09-12', startAt: '2026-09-12T15:30:00+09:00', endAt: '2026-09-12T16:00:00+09:00', stage: '오픈스테이지', description: '졸속[拙速] : 일을 지나치게 빨리 서둘러서 어설프고 서투름. 안녕하세요. 저희는 졸속밴드입니다.' },
  { id: 'os-12-3', title: '브로콜리넘어져', type: 'OPEN_STAGE', date: '2026-09-12', startAt: '2026-09-12T16:00:00+09:00', endAt: '2026-09-12T16:30:00+09:00', stage: '오픈스테이지', description: '너마저 넘어져' },
  { id: 'os-12-4', title: '매미는맴맴', type: 'OPEN_STAGE', date: '2026-09-12', startAt: '2026-09-12T16:30:00+09:00', endAt: '2026-09-12T17:00:00+09:00', stage: '오픈스테이지', description: '매미는 맴..맴..하고 웁니다…' },
  { id: 'os-12-5', title: 'RC/LC', type: 'OPEN_STAGE', date: '2026-09-12', startAt: '2026-09-12T17:00:00+09:00', endAt: '2026-09-12T17:30:00+09:00', stage: '오픈스테이지', description: '동신과고 졸업생 하드록•메탈 밴드 RC//LC입니다🔥' },

  { id: 'ia-12-1', title: '별은', type: 'INVITED_ARTIST', date: '2026-09-12', startAt: '2026-09-12T18:30:00+09:00', endAt: '2026-09-12T19:00:00+09:00', stage: '메인 무대' }, // 
  { id: 'ia-12-2', title: '예빛', type: 'INVITED_ARTIST', date: '2026-09-12', startAt: '2026-09-12T19:00:00+09:00', endAt: '2026-09-12T19:30:00+09:00', stage: '메인 무대' },
  { id: 'ia-12-3', title: '데이먼스이어', type: 'INVITED_ARTIST', date: '2026-09-12', startAt: '2026-09-12T19:30:00+09:00', endAt: '2026-09-12T20:10:00+09:00', stage: '메인 무대' },
  { id: 'ia-12-4', title: '너드커넥션', type: 'INVITED_ARTIST', date: '2026-09-12', startAt: '2026-09-12T20:10:00+09:00', endAt: '2026-09-12T20:50:00+09:00', stage: '메인 무대' },
  { id: 'ia-12-5', title: '체리필터', type: 'INVITED_ARTIST', date: '2026-09-12', startAt: '2026-09-12T20:50:00+09:00', endAt: '2026-09-12T21:30:00+09:00', stage: '메인 무대' },
];

export const booths: Booth[] = [
  { id:'1', boothNumber:'1', name:'인포부스', organization:'KAMF 외부 기획단', category:'INFO_SELF', description:'행사 안내와 굿즈 교환을 위한 인포부스입니다.', locationHint:'창의학습관 옆' },
  { id:'2', boothNumber:'2', name:'밝은눈안과', organization:'밝은눈안과', category:'SPONSOR', description:'밝은눈안과 후원부스' },
  { id:'3', boothNumber:'3', name:'플리마켓', category:'INVITED', description:'플리마켓 부스' },
  { id:'4', boothNumber:'4', name:'플리마켓', category:'INVITED', description:'플리마켓 부스' },
  { id:'5', boothNumber:'5', name:'타이타이 Thai Thai', organization:'TSAK', category:'CLUB', description:'TSAK의 태국 밀크티와 핑크 밀크, 치즈케이크' },
  { id:'6', boothNumber:'6', name:'탁구야끼 Tagguyaki', organization:'EDGE', category:'CLUB', description:'엣지의 타코야끼' },
  { id:'7', boothNumber:'7', name:'카페인 충전소 KaldiPlace', organization:'KALDI', category:'CLUB', description:'칼디의 커피와 라떼, 자체 제작 음료수' },
  { id:'8', boothNumber:'8', name:'STUDIO PASSION', organization:'열정부', category:'CLUB', description:'열정부의 회지 및 굿즈 전시/판매와 키링 만들기 체험' },
  { id:'9', boothNumber:'9', name:'KAMF RE:CORD', organization:'KAMF 외부 기획단', category:'INFO_SELF', description:'캄기단이 준비한 체험부스' },
  { id:'10-11', boothNumber:'10-11', name:'TRON', organization:'TRON', category:'SPONSOR', description:'TRON 후원부스' },
  { id:'12', boothNumber:'12', name:'플리마켓', category:'INVITED', description:'플리마켓 부스' },
  { id:'13', boothNumber:'13', name:'플리마켓', category:'INVITED', description:'플리마켓 부스' },
  { id:'14', boothNumber:'14', name:'새내기학생왜해? Maehwa will dominate KAIST', organization:'새내기학생회', category:'CLUB', description:'새내기학생회의 와플' },
  { id:'15', boothNumber:'15', name:'안녕하세요씨드입니다잘부탁드립니다 SEED\'s Paradise', organization:'SEED', category:'CLUB', description:'씨드의 파르페와 음료' },
  { id:'16', boothNumber:'16', name:'검객빙수상회 SWORDSMAN BINGSU CO.', organization:'검우회', category:'CLUB', description:'검우회의 검도 머리치기 체험과 빙수' },
  { id:'17', boothNumber:'17', name:'과기원신문 빙과국 KAIST Times Scoop Bureau', organization:'KAIST Times', category:'CLUB', description:'카이스트신문의 빈티지 신문 제작 체험과 과자 아이스크림' },
  { id:'18', boothNumber:'18', name:'Runtime', organization:'전산학부 집행위원회', category:'CLUB', description:'전산학부 집행위원회의 모션 인식 러닝 액션 게임과 슬러시' },
  { id:'19', boothNumber:'19', name:'헤나가주아 Hennagajua', organization:'그리미주아', category:'CLUB', description:'그리미주아의 헤나 아트, 페이스페인팅' },
  { id:'20', boothNumber:'20', name:'팔찌 & 슬랑이 공방 Bracelet & Slime', organization:'곰발바닥', category:'CLUB', description:'곰발바닥의 체인 팔찌와 슬랑이 제작 체험과 왁뿌볼 판매' },
  { id:'21', boothNumber:'21', name:'도토리 캐리커쳐 Acorn Caricature', category:'INVITED', description:'캐리커쳐 초청부스' },
  { id:'22', boothNumber:'22', name:'엠조이 스튜디오(슈링크스 키링) MJOY STUDIO', category:'INVITED', description:'슈링크스 키링 제작 초청부스' },
  { id:'23', boothNumber:'23', name:'마이뮤직파이브 mymusic5', organization:'MPAG', category:'SPONSOR', description:'MPAG 후원부스' },
  { id:'walk', boothNumber:'+', name:'키다리삐에로 풍선 Stilt walker balloon', category:'INVITED', description:'잔디광장을 돌아다니며 풍선을 불어줍니다', locationHint:'잔디광장 순회' },
  ...Array.from({ length: 7 }, (_, i): Booth => ({ id:String(24+i), boothNumber:String(24+i), name:`야시장 ${24+i}번`, category:'NIGHT_MARKET', description:'세부 부스 정보는 현장 안내에 따라 업데이트됩니다.' })),
  ...Array.from({ length: 14 }, (_, i): Booth => ({ id:`F${i+1}`, boothNumber:`F${i+1}`, name:`푸드트럭 F${i+1}`, category:'FOOD_TRUCK', description:'푸드트럭 상세 정보는 현장 안내에 따라 업데이트됩니다.' })),
];

export const goods: GoodsItem[] = [
  { id:'g1', name:'반다나', requiredVisits:7, requiredCategory:'SPONSOR', requiredCategoryLabel:'후원부스 + 오픈스테이지 포함', description:'후원부스와 오픈스테이지를 포함해 총 7개의 부스를 방문하면 교환할 수 있습니다.' },
  { id:'g2', name:'응원수건', requiredVisits:5, requiredCategory:'INFO_SELF', requiredCategoryLabel:'후원부스 + 자체부스 포함', description:'후원부스와 자체부스를 포함해 총 5개의 부스를 방문하면 교환할 수 있습니다.' },
  { id:'g3', name:'키링', requiredVisits:2, description:'총 2개의 부스를 방문하면 교환할 수 있습니다.' },
];
