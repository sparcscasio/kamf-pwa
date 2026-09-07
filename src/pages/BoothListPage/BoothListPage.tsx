import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Search } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import BottomSheet from '@/components/common/BottomSheet';
import { Page, Card } from '@/components/common/ui';
import { useBooths } from '@/hooks/useData';
import { BOOTH_CATEGORY } from '@/constants/boothCategory';
import type { Booth, BoothCategory } from '@/types';

const SearchBox=styled.div`display:flex;align-items:center;gap:8px;border:1px solid ${({theme})=>theme.colors.line};border-radius:12px;background:${({theme})=>theme.colors.paper};padding:0 12px;height:44px;input{border:0;outline:0;background:transparent;width:100%;}`;
const Chips=styled.div`display:flex;gap:6px;overflow:auto;margin:10px -16px 14px;padding:0 16px;`;
const Chip=styled.button<{active:boolean}>`white-space:nowrap;border:1px solid ${({theme})=>theme.colors.line};border-radius:999px;padding:7px 10px;font-size:11px;font-weight:800;background:${p=>p.active?p.theme.colors.primary:p.theme.colors.paper};color:${p=>p.active?'white':p.theme.colors.ink};`;
const BoothRow=styled(Card)`padding:13px;margin-bottom:8px;display:grid;grid-template-columns:34px 1fr auto;align-items:center;gap:10px;box-shadow:none;cursor:pointer;`;
const Num=styled.div`width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:${({theme})=>theme.colors.soft};font-size:11px;font-weight:900;`;
const Name=styled.div`font-size:13px;font-weight:800;line-height:1.35;`;
const Org=styled.div`font-size:10px;color:${({theme})=>theme.colors.muted};margin-top:3px;`;
const Badge=styled.span<{c:string}>`border:1px solid ${p=>p.c};color:${p=>p.c};border-radius:999px;padding:3px 6px;font-size:9px;font-weight:800;`;
const SheetTitle=styled.h2`font:700 23px/1.3 'Gowun Batang',serif;margin:7px 0;`;
const SheetText=styled.p`font-size:13px;line-height:1.75;color:${({theme})=>theme.colors.muted};`;

export default function BoothListPage(){
 const { data: booths = [] } = useBooths();
 const [category,setCategory]=useState<'ALL'|BoothCategory>('ALL');const [query,setQuery]=useState('');const [selected,setSelected]=useState<Booth|null>(null);
 const cats:('ALL'|BoothCategory)[]=['ALL','INFO_SELF','SPONSOR','INVITED','CLUB','NIGHT_MARKET','FOOD_TRUCK'];
 const list=useMemo(()=>booths.filter(b=>(category==='ALL'||b.category===category)&&(!query||`${b.name} ${b.organization??''} ${b.boothNumber}`.toLowerCase().includes(query.toLowerCase()))),[category,query,booths]);
 return <Page><PageHeader title="부스 리스트"/><SearchBox><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="부스명, 단체명, 번호 검색"/></SearchBox><Chips>{cats.map(c=><Chip key={c} active={category===c} onClick={()=>setCategory(c)}>{c==='ALL'?'전체':BOOTH_CATEGORY[c].shortLabel}</Chip>)}</Chips>{list.map(b=><BoothRow key={b.id} onClick={()=>setSelected(b)}><Num>{b.boothNumber}</Num><div><Name>{b.name}</Name><Org>{b.organization??b.description}</Org></div><Badge c={BOOTH_CATEGORY[b.category].color}>{BOOTH_CATEGORY[b.category].shortLabel}</Badge></BoothRow>)}{selected&&<BottomSheet onClose={()=>setSelected(null)}><Badge c={BOOTH_CATEGORY[selected.category].color}>{BOOTH_CATEGORY[selected.category].label} · {selected.boothNumber}</Badge><SheetTitle>{selected.name}</SheetTitle>{selected.organization&&<SheetText><b>운영 단체</b> · {selected.organization}</SheetText>}<SheetText>{selected.description}</SheetText>{selected.locationHint&&<SheetText><b>위치</b> · {selected.locationHint}</SheetText>}</BottomSheet>}</Page>}
