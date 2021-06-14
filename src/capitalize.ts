const capitalizeString = (stringValue: string): string => {
  return stringValue.charAt(0).toUpperCase() + stringValue.substring(1).toLowerCase();
};

class Capitalize {
  letter(stringValue: string) {
    if (!stringValue || typeof stringValue !== 'string') {
      return stringValue;
    }
    return stringValue.charAt(0).toUpperCase() + stringValue.substring(1).toLowerCase();
  }
  words(stringValue: string) {
    if (!stringValue || typeof stringValue !== 'string') {
      return stringValue;
    }
    const splitString = stringValue.split(' ');
    const capitalizedWordInArray = splitString.map((str: string) => capitalizeString(str));
    return capitalizedWordInArray.join(' ');
  }
}

const capitalize = new Capitalize();

export { capitalize };
