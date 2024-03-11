// explict显示类型
let firstname: string = "John";

// implicit隐式类型，更短更快，适合开发和测试
let lastname = "doe";

// 类型推论错误，都会报错
// firstname = 1;
// lastname = 2;

// 无法推断
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

// any与unknown：any禁用类型检查允许使用所有类型（不和js一样了么），unknown用来替代any（更安全）
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); //强制转换是指我们使用“as”关键字来表示属性或变量
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting