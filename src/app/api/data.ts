const handleDirectionList = (directionList: object[]): object[] => {
  return directionList.map((direction) => {
    return {
      name: direction.name,
      address: direction.address,
      cover: direction.image[0],
      classify: direction.classify,
      price: direction.price,
    };
  });
};

const handleTipsList = (tipsList: object[]) => {
  return tipsList.map((tip) => {
    return {
      name: tip.title,
      cover: tip.images[0],
    };
  });
};
