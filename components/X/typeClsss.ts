export class typeClsss {
  static getTextColor(tag: string, colorNumber: string) {
    return `text-${tag}-${colorNumber}`;
  }
  static getBgColor(tag: string, colorNumber: string) {
    return `bg-${tag}-${colorNumber}`;
  }

  static getWeight() {
    return "";
  }
}
