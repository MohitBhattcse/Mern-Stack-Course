// // // // //Benifits
// // // // //reusabi.ity
// // // // //readability
// // // // function square(num){
// // // //     return num*num;
// // // // }
// // // // console.log(square(10));

// // // // For finding the square of a function using the js
// // // function area(length,breadth){
// // //     return length*breadth
// // // }
// // // console.log(area(10,20))
// // //for finding the area of a circle
// // // function area(radius){
// // //     return 3.14*2*radius}
// // //     console.log(area(15));
// // //Tricky examples
// // function a(){
// //     let b=10;
// //     function c(){
// //         console.log(b);
// //     }
// //  c();
// // }
// // a();
// //We can access the global variable inside the function, but we can access local variable only inside the function.

// // function a(b){
// //     let b=20;
// // }
// // console.log(b);
// // a();
// //this above code will gives you an error becausde we are using local variable outside the function
// let r=20;

// function a(b){
//     b=20;
//     console.log(r);
// }
// a();
// // so this is not giving us an error and giving us the direct value becuase we are using global variable inside the function.
