export const reverseString = (str: string) => {
  const chars: string[]  = str.split('');
  let start = 0;
  let end = chars.length - 1;
  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }
  return chars;
}