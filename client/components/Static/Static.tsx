import styled, { css } from "styled-components";

const INDENT = 20;

type Props = {
  justify: "top" | "middle" | "bottom";
  align: "left" | "right";
};

export const Static = styled.div.withConfig({
  shouldForwardProp: (prop) => !["includes", "align"].includes(prop),
})<Props>`
  position: absolute;
  z-index: 1;

  ${({ align }) => {
    switch (align) {
      case "left":
        return `left: ${INDENT}px;`;

      case "right":
        return `right: ${INDENT}px;`;
    }
  }}

  ${({ justify }) => {
    switch (justify) {
      case "top":
        return `top: ${INDENT}px;`;

      case "middle":
        return css`
          top: 50%;
          transform: translateY(-50%);
        `;

      case "bottom":
        return `bottom: ${INDENT}px;`;
    }
  }}
`;
