//addup amounts for top 7
//  top 7 of selected filter
let sumAll = {};
const date = new Date();
const year = date.getFullYear() - 1;
function topChecked(lineNonNull, selectedTableColumnName, keysInOrder) {
  const totalAmounts = (objectArray, property) => {
    return objectArray.reduce(function(total, obj) {
      //cat type to make a new key
      let key = obj[property];
      //make a new object if the year-mo and category not existing
      if (!total[key]) {
        total[key] = [];
      }

      //count all item since previous year
      if (obj["created_year"] >= year) {
        total[key].push(obj);
      }
      return total;
    }, {});
  };

  sumAll = totalAmounts(lineNonNull, selectedTableColumnName);

  //return key and length
  const totalArray = [];
  for (let key in sumAll) {
    //minimum required sessions 10
    let value = sumAll[key].length;
    if (value > 10) {
      let obj = {};
      obj[value] = key;
      totalArray.push(obj);
    }
  }

  //sort array by amounts
  let ordered = [];
  for (let i = 0; i < totalArray.length; i++) {
    //put at end of array
    ordered.push(totalArray[i]);
    let found = false;
    let pointer = ordered.length - 2;
    let newValue = totalArray[i];
    while (ordered.length > 1 && !found && pointer >= 0) {
      if (
        Number(Object.keys(totalArray[i])) >
        Number(Object.keys(ordered[pointer]))
      ) {
        //swap
        let less = ordered[pointer];
        ordered[pointer + 1] = less;
        ordered[pointer] = newValue;
        pointer -= 1;
      } else {
        found = true;
      }
    }
  }
  //put categories in an array by top 7
  //const keysInOrder = [];

  for (let i = 0; i < ordered.length; i++) {
    if (i < 7) {
      let cat = Object.values(ordered[i]);
      keysInOrder.push(cat[0]);
    }
  }
  return keysInOrder;
}
export { topChecked, sumAll };
