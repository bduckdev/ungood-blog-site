export function removeSpecialChars(str: string) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}

export function trunc(str: string, amount: number) {
  const fancyStr = `${str.substring(0, amount)}...`;
  return fancyStr;
}
