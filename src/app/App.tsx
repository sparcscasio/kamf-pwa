import styled from '@emotion/styled';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const Desktop = styled.div`min-height:100dvh;background:#e9e1d7;`;
const Mobile = styled.main`
  width:100%;max-width:430px;min-height:100dvh;margin:0 auto;background:${({theme})=>theme.colors.cream};
  overflow-x:hidden;box-shadow:0 0 40px rgba(70,45,25,.10);
`;
export default function App(){return <Desktop><Mobile><RouterProvider router={router}/></Mobile></Desktop>}
