import axios from 'axios';

const getUser = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  axios
    .get('https://reqres.in/api/products/3', config)
    .then((res) => {
      // console.log(res);
      document.querySelector('[data-name]').innerHTML = res.data.data.name;
    })
    .catch((err) => console.log(err));
};
export default getUser;
