import styled from '@emotion/styled';
import PageHeader from '@/components/layout/PageHeader';
import { Page, Card } from '@/components/common/ui';
const Logo=styled.div`font:700 48px 'Gowun Batang',serif;color:${({theme})=>theme.colors.primary};text-align:center;margin:38px 0 8px;`;
const Meta=styled.div`text-align:center;font-size:11px;letter-spacing:.14em;color:${({theme})=>theme.colors.muted};`;
const Box=styled(Card)`margin-top:30px;padding:16px;box-shadow:none;font-size:12px;line-height:1.8;`;
export default function AppInfoPage(){return <Page><PageHeader title="앱 정보" back/><Logo>KAMF</Logo><Meta>2026 · KAIST MUSIC FESTIVAL</Meta><Box><b>모바일 PWA</b><br/>브라우저에서 바로 열거나 홈 화면에 추가해 앱처럼 사용할 수 있습니다.<br/><br/><b>Version</b> 1.0.0<br/><b>Theme</b> KAMF Now Playing · Vintage Record</Box></Page>}
