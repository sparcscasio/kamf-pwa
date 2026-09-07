import styled from '@emotion/styled';

const Wrap = styled.div<{size:number}>`position:relative;width:${p=>p.size}px;height:${p=>p.size}px;flex:0 0 auto;`;
const Disc = styled.div`
  position:absolute;inset:0;border-radius:50%;background:repeating-radial-gradient(circle at center,#1f1f1e 0 7px,#2a2826 8px 10px);
  box-shadow: inset 0 0 0 1px #000;
  &::before{content:'';position:absolute;inset:34%;border-radius:50%;background:#7b1e1e;}
  &::after{content:'';position:absolute;inset:48%;border-radius:50%;background:#f7f0e6;}
`;
const Arm = styled.div`position:absolute;width:9px;height:72%;right:4%;top:-2%;border-radius:10px;background:#211f1f;transform:rotate(16deg);transform-origin:top;`;
export default function RecordArt({size=140}:{size?:number}){return <Wrap size={size}><Disc/><Arm/></Wrap>}
