import { css } from "@emotion/react";
import { colors } from "../colors";
import { fonts } from "../typography";

export const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  a {
    text-decoration: none;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  @supports (object-fit: cover) {
    img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  *::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  &::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
`;

export const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.background};
    font-family: ${fonts.primary};
    color: ${colors.primary};
  }
`;
