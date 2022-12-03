import { css } from '@emotion/react';

export const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  textarea,
  button,
  select {
    margin: 0;
    padding: 0;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    border: 0;
    vertical-align: top;
  }
  em,
  address {
    font-style: normal;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
  }
  input,
  textarea {
    -webkit-appearance: none;
    border-radius: 0;
  }
  input::-ms-clear {
    display: none;
  }
  body,
  input,
  select,
  textarea,
  button,
  a {
    -webkit-text-size-adjust: none;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
  }
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #f6f7f8;
  }
  #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .picker-container {
    z-index: 10001;

    width: 100%;

    &,
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    .picker-inner {
      position: relative;

      display: flex;
      justify-content: center;
      height: 100%;
      padding: 0 20px;

      font-size: 1.2em;
      -webkit-mask-box-image: linear-gradient(
        to top,
        transparent,
        transparent 5%,
        white 20%,
        white 80%,
        transparent 95%,
        transparent
      );
    }

    .picker-column {
      flex: 1 1;

      position: relative;

      max-height: 100%;

      overflow: hidden;
      text-align: center;

      .picker-scroller {
        transition: 300ms;
        transition-timing-function: ease-out;
      }

      .picker-item {
        position: relative;

        padding: 0 10px;

        white-space: nowrap;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;

        &.picker-item-selected {
          color: #222;
        }
      }
    }

    .picker-highlight {
      position: absolute;
      top: 50%;
      left: 0;

      width: 100%;

      pointer-events: none;

      &:before,
      &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: auto;

        display: block;
        width: 100%;
        height: 1px;

        background-color: #d9d9d9;
        transform: scaleY(0.5);
      }

      &:before {
        top: 0;
        bottom: auto;
      }

      &:after {
        bottom: 0;
        top: auto;
      }
    }
  }
`;
