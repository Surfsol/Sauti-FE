function addArray(item) {
  let numArray = [];

  for (let key in item) {
    if (key !== "date") {
      numArray.push(item[key]);
    } else {
      item["count"] = 0;
    }
  }

  let total = numArray.reduce(function(a, b) {
    return a + b;
  }, 0);

  for (let key in item) {
    if (key !== "date") {
      let newNum = (item[key] / total) * 100;
      newNum = newNum.toFixed(2);
      item[key] = newNum;
      // item[key] = (item[key] / total) * 100;
    }
  }
  item["count"] = total;
}

function hundredScale(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    addArray(item);
  }

  return { array };
}

export { hundredScale };
