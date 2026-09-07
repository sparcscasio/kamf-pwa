import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import BottomSheet from '@/components/common/BottomSheet';
import { Page, PrimaryButton } from '@/components/common/ui';
import { BOOTH_CATEGORY } from '@/constants/boothCategory';
import { useBooths } from '@/hooks/useData';
import type { Booth, BoothCategory } from '@/types';

const MapCard=styled.div`border:1px solid ${({theme})=>theme.colors.line};border-radius:16px;background:#ead6b8;padding:8px;overflow:hidden;`;
const Legend=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:7px 8px;margin:12px 2px 15px;font-size:10px;`;
const Dot=styled.span<{c:string}>`width:8px;height:8px;border-radius:50%;background:${p=>p.c};display:inline-block;margin-right:5px;`;
const SheetTitle=styled.h2`font:700 24px/1.25 'Gowun Batang',serif;margin:3px 0 8px;`;
const Badge=styled.span<{c:string}>`display:inline-block;background:${p=>p.c};color:white;border-radius:999px;padding:4px 8px;font-size:10px;font-weight:800;`;
const SheetText=styled.p`font-size:13px;line-height:1.7;color:${({theme})=>theme.colors.muted};margin-top:10px;`;
const Slot=({x,y,w=20,h=24,label,cat,onClick}:{x:number;y:number;w?:number;h?:number;label:string;cat:BoothCategory;onClick?:()=>void})=><g onClick={onClick} style={{cursor:onClick?'pointer':'default'}}><rect x={x} y={y} width={w} height={h} rx="2" fill={BOOTH_CATEGORY[cat].color}/><text x={x+w/2} y={y+h/2+3} textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff">{label}</text></g>;

export default function MapPage(){
 const nav=useNavigate(); const [selected,setSelected]=useState<Booth|null>(null);
 const { data: booths = [] } = useBooths();
 const byId=useMemo(()=>new Map(booths.map(b=>[b.id,b])),[booths]); const open=(id:string)=>setSelected(byId.get(id)??null);
 return <Page><PageHeader title="KAMF 배치도"/>
 <MapCard><svg viewBox="0 0 340 455" width="100%" preserveAspectRatio="xMidYMid meet" aria-label="2026 KAMF 전체 부스 배치도">
 <rect width="340" height="455" rx="12" fill="#E6CFAF"/><path d="M12 14H328V441H12z" fill="#E9D6BA" opacity=".7"/>
 <rect x="80" y="16" width="170" height="34" rx="4" fill="#2A2723"/><text x="165" y="38" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">무대</text>
 <rect x="80" y="66" width="150" height="225" rx="5" fill="#C7C0A3"/><text x="155" y="183" textAnchor="middle" fill="#544D43" fontSize="14" fontWeight="800">잔디광장</text>
 <text x="155" y="88" textAnchor="middle" fill="#6A625A" fontSize="8">카이존</text>
 <text x="319" y="83" textAnchor="middle" fill="#4E483F" fontSize="8" fontWeight="700" transform="rotate(90 319 83)">창의학습관</text><text x="308" y="83" textAnchor="middle" fill="#6A625A" fontSize="6" transform="rotate(90 308 83)">(신학관)</text>
 <text x="302" y="252" textAnchor="middle" fill="#4E483F" fontSize="8" transform="rotate(90 302 252)">학술문화관 방향</text>
 {[14,15,16,17,18,19,20].map((n,i)=><Slot key={n} x={44} y={89+i*27} label={String(n)} cat="CLUB" onClick={()=>open(String(n))}/>)}
 {[3,4,5,6,7,8,9].map((n,i)=><Slot key={n} x={235} y={73+i*28} label={String(n)} cat={n===9?'INFO_SELF':n<=4?'INVITED':'CLUB'} onClick={()=>open(String(n))}/>)}
 <Slot x={235} y={269} label="10" cat="SPONSOR" onClick={()=>open('10-11')}/><Slot x={235} y={297} label="11" cat="SPONSOR" onClick={()=>open('10-11')}/>
 <Slot x={43} y={286} label="21" cat="INVITED" onClick={()=>open('21')}/><Slot x={65} y={286} label="22" cat="INVITED" onClick={()=>open('22')}/><Slot x={87} y={286} label="23" cat="SPONSOR" onClick={()=>open('23')}/>
 <Slot x={275} y={55} label="1" cat="INFO_SELF" onClick={()=>open('1')}/><Slot x={275} y={81} label="2" cat="SPONSOR" onClick={()=>open('2')}/>
 <Slot x={281} y={126} label="F3" cat="FOOD_TRUCK"/><Slot x={281} y={152} label="F4" cat="FOOD_TRUCK"/><Slot x={281} y={178} label="F5" cat="FOOD_TRUCK"/><Slot x={281} y={204} label="F6" cat="FOOD_TRUCK"/><Slot x={281} y={230} label="F7" cat="FOOD_TRUCK"/><Slot x={281} y={256} label="F8" cat="FOOD_TRUCK"/>
 <rect x="35" y="328" width="205" height="98" rx="7" fill="#D8C09F"/><text x="138" y="342" textAnchor="middle" fontSize="8" fill="#6a5642">야시장 · 푸드트럭 구역</text>
 {[24,25,26,27,28].map((n,i)=><Slot key={n} x={48} y={352+i*14} w={24} h={12} label={String(n)} cat="NIGHT_MARKET" onClick={()=>open(String(n))}/>)}
 <Slot x={86} y={410} w={26} h={12} label="29" cat="NIGHT_MARKET" onClick={()=>open('29')}/><Slot x={114} y={410} w={26} h={12} label="30" cat="NIGHT_MARKET" onClick={()=>open('30')}/>
 {[9,10,11,12,13,14].map((n,i)=><Slot key={'F'+n} x={263} y={345+i*14} w={25} h={12} label={'F'+n} cat="FOOD_TRUCK"/>)}
 <text x="315" y="390" textAnchor="middle" fill="#5b4b3d" fontSize="8" transform="rotate(90 315 390)">학술문화관</text>
 </svg></MapCard>
 <Legend>{Object.values(BOOTH_CATEGORY).map(v=><span key={v.label}><Dot c={v.color}/>{v.label}</span>)}</Legend>
 <PrimaryButton onClick={()=>nav('/booths')}>부스 리스트에서 찾아보기</PrimaryButton>
 {selected&&<BottomSheet onClose={()=>setSelected(null)}><Badge c={BOOTH_CATEGORY[selected.category].color}>{BOOTH_CATEGORY[selected.category].label} · {selected.boothNumber}</Badge><SheetTitle>{selected.name}</SheetTitle>{selected.organization&&<SheetText><b>운영</b> · {selected.organization}</SheetText>}<SheetText>{selected.description}</SheetText>{selected.locationHint&&<SheetText><b>위치</b> · {selected.locationHint}</SheetText>}</BottomSheet>}
 </Page>}
