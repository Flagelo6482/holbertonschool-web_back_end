const wMap = new WeakMap();

const queryAPI = (endpoint) => {
  let t = wMap.get(endpoint) || 0;
  wMap.set(endpoint, t -= -1);
  if (t >= 5) throw new Error('Endpoint load is high');
  return t;
};

export { wMap, queryAPI };
