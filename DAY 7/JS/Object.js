// // // //num,str,typeof,obj,keys,
// // // var c=22;
// // // console.log(typeof(c));
// // // var c="Mohit";
// // // console.log(typeof(c));
// // //Now object
// // var obj={Firstname:"Sumit","lastname":"Sharma","Age":18,"Profession":"Student"};
// // console.log(obj, typeof obj);
// // //To call the keys of the particular values
// // console.log(obj.Firstname);
// // console.log(obj.lastname);
// // console.log(obj.Age);
// // console.log(obj.Profession);
// // //Another way to call the value of the keys
// // console.log(obj["Firstname"]);
// // //To change the values of the keys
// // obj["Firstname"]="Ramakant";
// // obj.Firstname="Ramant";

// // console.log(obj.Firstname);
// // //For finding the object 
// // console.log(Object.values(obj));
// // //For finding the keys of the object 
// // console.log(Object.keys(obj));
// var status="Double";
// var obj={
//     name:"Mohit",
//     age:18,
//     profession:"Student",
//     status:"Single",
//     Qualification:"Engineer",
//     family: {
//         siblings:1,
//         cousins: 2,
//         brothers: 3,
//         famili: ["mother", "father", "sister", "brother"]
//     },
//     fullname: function(){
//         //using this. will print the value inside the function otherwise it will go for outside the function
//         return this.status;
//     }
// }
// //For adding values and keys to the object
// obj["color"]="light";
// console.log(obj);
// // //To call the value of instances of object
// // console.log(obj.family.famili);
// // console.log(obj["family"]["famili"]);
// // console.log(obj["family"]["famili"][3]);
// // console.log(obj.family.brothers);
// // console.log(obj["family"]);
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(obj.fullname());
