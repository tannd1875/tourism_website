const data = [
  {
    name: "Làng tre Phú An",
    address: "Bình Dương",
    cover:
      "https://digiticket.vn/blog/wp-content/uploads/2021/08/lang-tre-phu-an-1.jpg",
    price: 20000,
    classify: "Danh lam thắng cảnh",
  },
  {
    name: "Khu du lịch Suối tiên",
    address: "Thành phố Hồ Chí Minh",
    cover:
      "https://th.bing.com/th/id/OIP.gRva1uA6BOy1yBzzit8jMgHaFj?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 120000,
    classify: "Khu vui chơi giải trí",
  },
  {
    name: "Khu du lịch Đầm Sen",
    address: "Thành phố Hồ Chí Minh",
    cover:
      "https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-dam-sen-2.jpg?tr=dpr-2,w-675",
    price: 140000,
    classify: "Khu vui chơi giải trí",
  },
  {
    name: "Khu du lịch Hồ Bà Hào",
    address: "Đồng Nai",
    cover:
      "https://th.bing.com/th/id/OIP.JRDnwKjncR4DMzf2qZ_8nQHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 50000,
    classify: "Di tích lịch sử",
  },
  {
    name: "Chiến khu D",
    address: "Đồng Nai",
    cover:
      "https://th.bing.com/th/id/OIP.Bkqxfr8QJ4DL2bNdp9pLBAHaEo?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 0,
    classify: "Di tích lịch sử",
  },
  {
    name: "VINCOM MEGAMALL",
    address: "Thành phố Hồ Chí Minh",
    cover:
      "https://dongtayland.vn/wp-content/uploads/2021/10/vincom-mega-mall-vinhomes-grand-park-02.jpg",
    price: 0,
    classify: "Trung tâm thương mại",
  },
  {
    name: "Khu bảo tồn thiên nhiên Bình Châu, Phước Bửu",
    address: "Bà Rịa - Vũng Tàu",
    cover:
      "https://image.vietgoing.com/destination/vietgoing_dij2304182874.webp",
    price: 30000,
    classify: "Danh lam thắng cảnh",
  },
  {
    name: "Địa đạo Tam giác sắt",
    address: "Bình Dương",
    cover:
      "https://becamexhotels.com/wp-content/uploads/2020/05/tam-giac-sat-1.jpg",
    price: 0,
    classify: "Di tích lịch sử",
  },
];

// export const getData = (page: number, limit: number): Array<object> => {
//   const array = [];
//   for (let index = (page - 1) * limit; index < page * limit; index++)
//     if (index < data.length) array.push(data[index]);
//   return array;
// };

// export const fetchDirectionData = () => {
//   fetch("http://localhost:8080/direction/Bình Dương/làng tre")
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => console.log(err));
// };

// export const getDataFiltered = (filterList: Array<string>): Array<object> => {
//   const filteredData = data.filter((location) => {
//     if (filterList[0].length == 0 && filterList[1].length != 0)
//       return filterList[1].includes(location.classify);
//     else if (filterList[0].length != 0 && filterList[1].length == 0)
//       return filterList[0].includes(location.address);
//     else
//       return (
//         filterList[1].includes(location.classify) &&
//         filterList[0].includes(location.address)
//       );
//   });
//   console.log(filteredData);
//   return filteredData;
// };

// export const getLength = () => {
//   return data.length;
// };

export const getData = (
  data: Array<object>,
  page: number,
  limit: number
): Array<object> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const getDataFiltered = (
  data: Array<object>,
  filterList: Array<string>
) => {
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
  console.log(filteredData);
  return filteredData;
};

export const getLength = (data: Array<object>) => {
  return data.length;
};
