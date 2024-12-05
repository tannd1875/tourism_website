import { directionType, tipType } from "@/lib/type";

export const manageDataOnTipPage = (
  data: Array<tipType>,
  page: number,
  limit: number
): Array<tipType> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const manageDataOnDirectionPage = (
  data: Array<directionType>,
  page: number,
  limit: number
): Array<directionType> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const getDataFiltered = (
  data: Array<directionType>,
  filterList: Array<string>
): Array<directionType> => {
  const filteredData = data.filter((location) => {
    if (filterList[0].length == 0 && filterList[1].length != 0)
      return filterList[1].includes(location.classify);
    else if (filterList[0].length != 0 && filterList[1].length == 0)
      return filterList[0].includes(location.address);
    else
      return (
        filterList[1].includes(location.classify) &&
        filterList[0].includes(location.address)
      );
  });
  return filteredData;
};

export const getLength = (data: Array<object>): number => {
  return data.length;
};
