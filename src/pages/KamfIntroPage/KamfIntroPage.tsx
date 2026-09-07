import styled from '@emotion/styled';
import PageHeader from '@/components/layout/PageHeader';
import { Page, Card, SectionTitle } from '@/components/common/ui';
import { aboutParagraphs } from '@/data/mock';
const Lead=styled(Card)`padding:18px;background:${({theme})=>theme.colors.beige};`;
const Big=styled.h2`font:700 31px/1.15 'Gowun Batang',serif;color:${({theme})=>theme.colors.primary};`;
const Body=styled.div`font-size:14px;line-height:1.9;letter-spacing:-.02em;p+p{margin-top:14px;}`;
const Stat=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px;`;
const Box=styled.div`border:1px solid ${({theme})=>theme.colors.line};border-radius:12px;background:${({theme})=>theme.colors.paper};padding:12px 8px;text-align:center;b{display:block;font:700 20px 'Gowun Batang',serif;color:${({theme})=>theme.colors.primary};}span{font-size:10px;color:${({theme})=>theme.colors.muted};}`;
export default function KamfIntroPage(){return <Page><PageHeader title="KAMF 소개" back/><Lead><div style={{fontSize:10,letterSpacing:'.18em'}}>KAIST MUSIC FESTIVAL</div><Big>2026 KAMF를<br/>소개합니다</Big><Stat><Box><b>2012</b><span>첫 시작</span></Box><Box><b>13회</b><span>2026 기준</span></Box><Box><b>약 1만</b><span>연간 참여</span></Box></Stat></Lead><SectionTitle>KAMF란?</SectionTitle><Body>{aboutParagraphs.map((p,i)=><p key={i}>{p}</p>)}</Body></Page>}
