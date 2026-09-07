import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; }
      html, body, #root { margin: 0; min-height: 100%; width: 100%; }
      html { background: #e9e1d7; -webkit-text-size-adjust: 100%; }
      body {
        background: #e9e1d7;
        color: #211f1f;
        font-family: 'Noto Sans KR', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
        overscroll-behavior-y: none;
      }
      button, input, textarea, select { font: inherit; }
      button { border: 0; background: none; padding: 0; color: inherit; cursor: pointer; }
      a { color: inherit; text-decoration: none; }
      img, svg { display: block; max-width: 100%; }
      h1, h2, h3, h4, p { margin: 0; }
      ul, ol { margin: 0; padding: 0; list-style: none; }
      ::selection { background: #7b1e1e; color: #fff9f1; }
    `} />
  );
}
