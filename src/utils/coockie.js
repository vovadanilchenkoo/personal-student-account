export const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    let key = v[0];
    let value = v[1];

    if(!key || !value) return false;

    acc[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim());
    return acc;
}, {});