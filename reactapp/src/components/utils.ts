export function isNumber(value: string) {
  return value != null && value !== '' && !isNaN(Number(value));
}

export function isUrl(string: string) {
  let givenURL;
  try {
    givenURL = new URL(string);
  } catch (error) {
    return false;
  }
  return true;
}
