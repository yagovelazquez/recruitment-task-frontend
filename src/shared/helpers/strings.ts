export function getStrAfterSubstr(str: string, substr: string) {
  const index = str.indexOf(substr) + substr.length;
  return str.substring(index);
}