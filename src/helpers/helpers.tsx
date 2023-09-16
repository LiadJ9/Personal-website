export const ranRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 10 : 14)) + 3;
  const ranrem = String(num) + "rem";
  return ranrem;
};

export const mobileRanRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 7 : 8) + 2);
  const ranrem = String(num) + "rem";
  return ranrem;
};

export const RanMs = () => {
  const ran = Math.floor(Math.random() * 2000);
  return ran;
};
