const functions = {
  sortArr: (arr) => {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          let x = arr[i];
          arr[j] = arr[i];
          arr[i] = x;
        }
      }
    }
    return arr;
  },
};
export default functions;
