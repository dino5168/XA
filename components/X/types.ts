//Primary Secondary Success Danger Warning Info Light Dark
import {bgColor, txSize} from "./typeconst";

export type badgeType = {
  bgColor?: keyof typeof bgColor; // `style` 改為 `variant`
  txSize?: keyof typeof txSize;
};
/****/
export {bgColor, txSize};
