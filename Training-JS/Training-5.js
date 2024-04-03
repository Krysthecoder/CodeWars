//Title: Training JS #5: Basic data types--Object
//Link: https://www.codewars.com/kata/571f1eb77e8954a812000837/solutions/javascript


function animal(obj){
    let contructor = "This" + " " + obj["color"]  + " " + obj["name"] + " " + "has" + " " + obj["legs"] + " " + "legs."
    return contructor
  }
  
  animal({name:"dog",legs:4,color:"white"})
  animal({name:"cock",legs:2,color:"red"})


  //learned that I have to include "index" while calling the attributes or we can also do obj.index


  function animal(obj){
    let contructor = "This" + " " + obj.color  + " " + obj.name + " " + "has" + " " + obj.legs + " " + "legs."
    return contructor
  }
  
  animal({name:"dog",legs:4,color:"white"})
  animal({name:"cock",legs:2,color:"red"})