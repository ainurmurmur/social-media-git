export const required = (value) => {
   if (value) return undefined;
    return 'Field is required';
}
export const maxLengthCreator = (maxLength) => (value) => {
 if(value.length && value.length >= maxLength) return `Field should contain ${maxLength} symbols`;
 return undefined;
}

