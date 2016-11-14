// //This is a single0line comment. Everything is ignored until the newline.
// var some_var;
//
// /*
// Thi is a multiple-line comment.
// I can keep tying words until
// I reach the final star-slash.
// */
// var some_other_var;
//
// console.log("IM IN A JS FILE!");
//
// // var input;
// // if (input === undefined){
// //   console.log("It's not defined.");
// //
// // } else {
// //   console.log(input);
// // }
//
// var input;
// if (input){
//   console.log(input);
//
// } else {
//   console.log("It's not defined.");
// }
//
// var test = false;
// var output = test ? "Passed the test" : "Failed the test";
// console.log(output);
//
// var value = 0;
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// } else {
//   console.log("or something else");
// }

// var x = 0;
// while (x < 10){
//   console.log(x);
//   x++;
// }
//
// var a = 0;
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//     a++;
//   }
// }
//
// for (var i = 0, i <= 10; i++) {
//   console.log(i);
// }

// var arr = ["a", "b", "c", "d"];
//
// arr.forEach(function(item) {
//   console.log(item);
// });

// function my_func_stmt(arg){
//   console.log("inside my function");
//   console.log(arg);
// }
//
// var my_func_exp = function(arg) {
//   console.log("inside my function");
//   console.log(arg);
// }

// var one = function() {
//   1;
// }
//
// var one = function() {
//   return 1;
// }
//
// function addArgs() {
//   console.log('printing args:', arguments);
// }

// addArgs(1,2,3,4);

// function addArgs() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }
//
// function defaultArgs(a, b) {
//   if (typeof(a) === "undefined") {
//     a = 0;
//   }
//   if (typeof(b) === und) {
//     b = 0;
//   }
//   return a + b;
// }
//
// // console.log(addArgs(3, 0.13, 0.01))
//
// switch (state_abbrev) {
//   case "FL":
//   "Florida";
//   break;
//   default:
//   "I DONT KNOW"
//   end
// }

// function times(number, block){
//   for (i = 0; i < number; i++){
//     block();
//   }
// }

// console.log(a_var === undefined);
// var a_var = 123;
// console.log(func_var === undefined);
//
// function a_function() {
//   console.log(func_var === undefined);
//   var func_var = "func";
// }
//
// a_function();

// var my_own_var = "hellojs1";
//
// function hello1() {
//   console.log(my_own_var);
// }

// function scope_func() {
//   var my_own_var = "hellojs1";
//
//   window.hello1 = function() {
//     console.log(my_own_var);
//   }
// }
//
// scope_func()

// function apply_to_array(a, b) {
//   console.log(a);
//   console.log(b);
// }
//
//
// apply_to_array([1, 2, 3, 4], function(number){
//   console.log(number+1);
// });

function afterJune(a) {
  console.log(a);
}
getDate()

afterJune(function(number){
  console.log(number+1);
});
