export const getData = (data: Array<object>, page: number, limit: number) => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const getLength = (data: Array<object>) => {
  return data.length;
};
