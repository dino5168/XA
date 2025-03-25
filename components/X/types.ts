export const pattern = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-600 text-white",
  success: "bg-green-600 text-white",
  danger: "bg-red-600 text-white",
  warning: "bg-yellow-600 text-white",
  info: "bg-sky-600 text-white",
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

export const pattern700 = {
  primary: "bg-blue-700 text-white",
  secondary: "bg-gray-700 text-white",
  success: "bg-green-700 text-white",
  danger: "bg-red-700 text-white",
  warning: "bg-yellow-700 text-white",
  info: "bg-sky-700 text-white",
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

export const size = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};
//Primary Secondary Success Danger Warning Info Light Dark
export type badgeType = {
  pattern?: keyof typeof pattern; // `style` 改為 `variant`
  size?: keyof typeof size;
};
