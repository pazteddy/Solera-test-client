import { colors } from "./assets/colors";

export const ContainerStyleCard = (width) => {
  return `
    color: ${colors.primary};
    width: ${width};
    height: fit-content;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 1px 4px 3px 0px rgba(0, 0, 0, 0.35);
    `;
};

export const ContainerStyleContent = `
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px;`;

export const ContainerStyleButton = `
    display: flex;
    gap: 20px;
    border-top: 1px solid ${colors.tertiary};
    background-color: ${colors.backgroundTertiary};
    padding: 20px 30px;
  `;
