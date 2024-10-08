export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubstr = value.slice(startString.length);
      if (valueSubstr) {
        result.push(valueSubstr);
      }
    }
  }

  return result.join('-');
}
