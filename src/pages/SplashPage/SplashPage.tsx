import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import RecordArt from '@/components/common/RecordArt';

const Wrap=styled.div`min-height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:32px;background:${({theme})=>theme.colors.cream};position:relative;overflow:hidden;`;
const Logo=styled.div`font-family:'Gowun Batang',serif;text-align:center;`;
const Small=styled.div`font-size:10px;letter-spacing:.42em;margin-bottom:10px;`;
const K=styled.div`font-size:58px;font-weight:700;letter-spacing:.06em;color:${({theme})=>theme.colors.primary};`;
const Sub=styled.div`font-size:11px;letter-spacing:.24em;margin-top:4px;`;
const Loading=styled.div`font-size:11px;letter-spacing:.18em;color:${({theme})=>theme.colors.muted};`;
export default function SplashPage(){const n=useNavigate();useEffect(()=>{const t=setTimeout(()=>n('/home',{replace:true}),1200);return()=>clearTimeout(t)},[n]);return <Wrap><Logo><Small>NOW PLAYING:</Small><K>KAMF</K><Sub>KAIST MUSIC FESTIVAL</Sub></Logo><RecordArt size={220}/><Loading>2026 KAMF · LOADING</Loading></Wrap>}
