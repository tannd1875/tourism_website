const fetchDirectionData = (): Array<object> => {
  fetch("http://localhost:8080/direction")
    .then((res) => res.json)
    .then((data) => {
      return data;
    });
    .catch((err) => console.log(err));
};
