import styled from '@emotion/styled';
import { ChevronRight, CircleHelp, Info, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { Page, Card } from '@/components/common/ui';
const Menu=styled(Card)`overflow:hidden;box-shadow:none;`;
const Row=styled.button`width:100%;height:58px;display:grid;grid-template-columns:32px 1fr 24px;align-items:center;padding:0 14px;border-bottom:1px solid ${({theme})=>theme.colors.line};text-align:left;&:last-child{border-bottom:0;}span{font-weight:800;font-size:13px;}`;
const Foot=styled.div`text-align:center;margin-top:40px;font:700 13px 'Gowun Batang',serif;color:${({theme})=>theme.colors.muted};line-height:1.8;`;
export default function MorePage(){const n=useNavigate();const share=async()=>{if(navigator.share)await navigator.share({title:'2026 KAMF',text:'2026 KAMF 정보를 확인해보세요!',url:location.origin});else{await navigator.clipboard.writeText(location.origin);alert('링크를 복사했습니다.')}};return <Page><PageHeader title="더보기"/><Menu><Row onClick={()=>n('/more/contact')}><CircleHelp size={18}/><span>문의하기</span><ChevronRight size={17}/></Row><Row onClick={()=>n('/more/app-info')}><Info size={18}/><span>앱 정보</span><ChevronRight size={17}/></Row><Row onClick={share}><Share2 size={18}/><span>공유하기</span><ChevronRight size={17}/></Row></Menu><Foot>KAMF 2026<br/>KAIST MUSIC FESTIVAL</Foot></Page>}
