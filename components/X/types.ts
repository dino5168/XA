//Primary Secondary Success Danger Warning Info Light Dark
import {bgColor, txSize, sectionStyle} from "./typeconst";
import {textCorleMap} from "./typemap";

export type badgeType = {
  bgColor?: keyof typeof bgColor; // `style` 改為 `variant`
  txSize?: keyof typeof txSize;
};

export type textColor = {
  textColor?: string;
};
export type bgcColor = {
  bgColor?: string;
};

export type sectionType = {
  sectionStyle?: keyof typeof sectionStyle;
} & textColor &
  bgcColor;
/*** const */
export {bgColor, txSize, sectionStyle, textCorleMap};
