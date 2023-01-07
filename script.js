/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(printThroghMap);
  
  function printThroghMap(arrayItem) {
    if (arrayItem.profession ==="developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(printThroghForEach);

  function printThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
 let newData = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  let remove_arr = arr.filter(function (val) {
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(remove_arr);
}

function concatenateArray() {
   let arr2 = [
    { id: 5, name: "avinahK", age: "24", profession: "frontend developer" },
    { id: 6, name: "amanS", age: "25", profession: "backend developer" },
    { id: 7, name: "vishalC", age: "27", profession: "project engineer" },
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
