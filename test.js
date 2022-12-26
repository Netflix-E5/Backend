const users = [
  {
    id: 60,
    name: "roger"
  },
  {
    id: 60,
    name: "roger"
  },
  {
    id: 60,
    name: "roger"
  },
  {
    id: 24,
    name: "fabio"
  },
  {
    id: 24,
    name: "fabio"
  },
  {
    id: 30,
    name: "guilherme"
  },
  {
    id: 60,
    name: "roger"
  }
];

/**
 * Returns a unique array by prop name
 * @param {array} array - array that will be compared
 * @param {string} compareProp - property that will be compared across the array
 * @returns new array of objects with uniques and a new prop with number of occurrences
 * @example:
 * const users = [{name: 'roger', id: 1}, {name: 'roger', id: 1}, {name: 'matheus', id: 2}];
 * getUniques(users, 'id');
 * // [{name: 'roger', id: 1, count: 2}, {name: 'matheus', id: 2, count: 1}]
 */
const getUniques = (array, compareProp) => {
  let byId = {};
  let uniques = [];

  let i = 0;
  let item = {};

  for (i; i < array.length; i++) {
    item = array[i];
    if (byId[item[compareProp]]) {
      byId[item[compareProp]].count++;
    } else {
      byId[item[compareProp]] = item;
      uniques.push(item);
      item.count = 1;
    }
  }

  return uniques;
};

console.table(getUniques(users, 'id'));