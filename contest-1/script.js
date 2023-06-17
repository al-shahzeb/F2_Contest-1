/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
  
    let mappedArr = arr.map((element) => {
      if(element.profession == 'developer')
        return element;
    });
  
    console.log(mappedArr);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
  
    arr.forEach( ele => {
      if(ele.profession == 'developer')
        console.log(ele);
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"} );
  
    console.log(arr[arr.length-1]);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  
    let filteredArr = arr.filter( ele => (ele.profession != 'admin'));
  
    arr = filteredArr;
  
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  
    let arr2 = [
      { id: 11, name: "sofia", age: "28", profession: "analyst" },
      { id: 23, name: "rocco", age: "25", profession: "hr" },
      { id: 13, name: "ben", age: "39", profession: "manager" }
    ];
  
    arr = arr.concat(arr2);
  
    console.log(arr);
  }
  