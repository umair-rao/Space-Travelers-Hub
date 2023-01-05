export default function pick(obj, arr) {
  // eslint-disable-next-line
  return arr.reduce((acc, record) => (record in obj && (acc[record] = obj[record]), acc), {});
}

export const addJoin = (arr) => {
  const missions = arr.map((obj) => ({ ...obj, joined: false }));
  return missions;
  
export const addReserved = (arr) => {
  const rockets = arr.map((obj) => ({ ...obj, reserved: false }));
  return rockets;
};
