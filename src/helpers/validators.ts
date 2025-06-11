export const validateValue = (value: string) => {
  value = value.replace(/,/g, '.');
  value = value.replace(/[^0-9.]/g, '');
  return value;
}