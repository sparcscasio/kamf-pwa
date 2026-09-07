import styled from '@emotion/styled';
import { CalendarDays, Map, Store, Info, Gift, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page, Card, SectionTitle } from '@/components/common/ui';
import PageHeader from '@/components/layout/PageHeader';
import RecordArt from '@/components/common/RecordArt';
import BottomSheet from '@/components/common/BottomSheet';
import { useMemo, useState } from 'react';
import { festival } from '@/data/mock';
import { useGoods, usePerformances } from '@/hooks/useData';
import { useNow } from '@/hooks/useNow';

const Hero=styled(Card)`padding:18px;overflow:hidden;position:relative;min-height:205px;background:${({theme})=>theme.colors.beige};`;
const HeroTitle=styled.div`font:700 42px/0.96 'Gowun Batang',serif;letter-spacing:-.055em;max-width:270px;`;
const Red=styled.span`color:${({theme})=>theme.colors.primary};`;
const HeroMeta=styled.div`font-size:11px;line-height:1.65;margin-top:16px;position:relative;z-index:2;`;
const Disc=styled.div`position:absolute;right:-52px;bottom:-72px;transform:rotate(-12deg);`;
const Countdown=styled.span`display:inline-block;background:${({theme})=>theme.colors.primary};color:white;border-radius:6px;padding:4px 9px;font-weight:700;margin-top:8px;`;
const Live=styled(Card)`margin-top:14px;padding:15px;background:linear-gradient(100deg,#7f1e1e,#9e2924);color:#fff7ec;box-shadow:none;`;
const LiveTop=styled.div`display:flex;justify-content:space-between;font-size:10px;letter-spacing:.12em;font-weight:800;`;
const LiveName=styled.div`font:700 21px/1.3 'Gowun Batang',serif;margin-top:5px;`;
const Quick=styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:8px;`;
const QuickBtn=styled.button`border:1px solid ${({theme})=>theme.colors.line};border-radius:12px;background:${({theme})=>theme.colors.paper};padding:12px 4px 10px;display:flex;flex-direction:column;align-items:center;gap:7px;font-size:11px;font-weight:700;`;
const Intro=styled(Card)`padding:15px;display:grid;grid-template-columns:1fr 94px;gap:12px;align-items:center;`;
const IntroTitle=styled.h3`font:700 18px 'Gowun Batang',serif;margin-bottom:6px;`;
const Text=styled.p`font-size:12px;line-height:1.65;color:${({theme})=>theme.colors.muted};`;
const Vinyl=styled.div`width:82px;height:82px;border-radius:50%;background:repeating-radial-gradient(circle,#211f1d 0 5px,#312d29 6px 7px);position:relative;&:after{content:'';position:absolute;width:26px;height:26px;background:${({theme})=>theme.colors.primary};border-radius:50%;left:28px;top:28px;}`;
const GoodsBtn=styled.button`margin-top:12px;width:100%;display:flex;align-items:center;justify-content:space-between;border-top:1px solid ${({theme})=>theme.colors.line};padding-top:12px;font-size:12px;font-weight:800;`;
const SheetTitle=styled.h2`font:700 24px 'Gowun Batang',serif;margin-bottom:8px;`;
const Good=styled.div`padding:14px 0;border-top:1px solid ${({theme})=>theme.colors.line};display:flex;justify-content:space-between;gap:16px;`;

export default function HomePage(){
 const nav=useNavigate(); const [showGoods,setShowGoods]=useState(false);
 const { data: performanceData = [] } = usePerformances();
 const now = useNow();
 const { data: goods = [] } = useGoods();
 const live=useMemo(()=>performanceData.find(p=>new Date(p.startAt).getTime()<=now && p.endAt && now<new Date(p.endAt).getTime()),[performanceData,now]);
 const eventStart = new Date('2026-09-10T00:00:00+09:00').getTime();
 const dday = Math.max(0, Math.ceil((eventStart-now)/86400000));
 return <Page><PageHeader title="KAMF" menu/>
 <Hero><HeroTitle>Now <Red>playing:</Red><br/>KAMF</HeroTitle><HeroMeta>{festival.dates}<br/>{festival.venue}<br/><Countdown>{now < eventStart ? `D-${dday}` : 'NOW'}</Countdown></HeroMeta><Disc><RecordArt size={170}/></Disc></Hero>
 <Live onClick={()=>nav('/performances')}><LiveTop><span>NOW PLAYING</span><span>{live?'LIVE':'SCHEDULE'}</span></LiveTop><LiveName>{live?.title ?? '2026 KAMF 공연 일정'}</LiveName><div style={{fontSize:11,marginTop:4}}>{live ? `${new Date(live.startAt).toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit',hour12:false})} · ${live.stage}` : '9월 10일부터 12일까지의 무대를 확인하세요.'}</div></Live>
 <SectionTitle>바로가기</SectionTitle><Quick>
 <QuickBtn onClick={()=>nav('/performances')}><CalendarDays size={21}/>공연 일정</QuickBtn><QuickBtn onClick={()=>nav('/map')}><Map size={21}/>배치도</QuickBtn><QuickBtn onClick={()=>nav('/booths')}><Store size={21}/>부스</QuickBtn><QuickBtn onClick={()=>nav('/about')}><Info size={21}/>KAMF 소개</QuickBtn></Quick>
 <SectionTitle>KAMF 소개</SectionTitle><Intro onClick={()=>nav('/about')}><div><IntroTitle>2026 KAMF를 소개합니다</IntroTitle><Text>2012년부터 이어진 KAIST 대표 음악 예술 축제. 올해는 공연을 넘어 다양한 프로그램이 이어지는 ‘축제 주간’으로 확장됩니다.</Text><GoodsBtn onClick={(e)=>{e.stopPropagation();setShowGoods(true)}}><span><Gift size={15} style={{display:'inline',verticalAlign:'middle',marginRight:5}}/>굿즈 교환 조건</span><ChevronRight size={16}/></GoodsBtn></div><Vinyl/></Intro>
 {showGoods&&<BottomSheet onClose={()=>setShowGoods(false)}><SheetTitle>굿즈 & 스티커 교환</SheetTitle><Text>부스에 참여하고 스티커를 모아 굿즈와 교환하세요. 창의학습관 옆 인포부스에서 교환할 수 있습니다.</Text>{goods.map(g=><Good key={g.id}><div><b>{g.name}</b><Text>{g.requiredCategoryLabel??'부스 방문'}</Text></div><b>{g.requiredVisits}개</b></Good>)}</BottomSheet>}
 </Page>
}
