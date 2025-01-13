export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function removeWhiteSpaces(value:string, replaceValue: string = ""): string {
  return value.replace(/\s/g, replaceValue);
}
