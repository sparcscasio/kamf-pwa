import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';
import { LocaleProvider } from '@/i18n/LocaleProvider';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false, retry: 1 } }
});

export default function Providers({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <GlobalStyle />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  </QueryClientProvider>;
}
