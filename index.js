let num1 = parseInt(prompt("input your first number"));
let op = prompt("input operators(+, -, *, /, %)");
let num2 = parseInt(prompt("input your second number"));

if (op== "+"){
document.write(num1 + num2);
}
else if(op == "-"){
document.write(num1 - num2);
}
else if(op == "/"){
  document.write(num1 / num2);
}
else if(op == "*"){
  document.write(num1 * num2);
}
else if(op== "%"){
  document.write(num1 % num2);
}
else{
  document.write("not a number");
}
