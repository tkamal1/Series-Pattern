
let a =0;
let b = 1;
let c;
var pattern = "";
pattern += a+" "+b+" ";
for(let i=1;i<=10;i++)
{
  c = a+b;
  pattern +=c+" ";
  a=b;
  b=c; 
}
console.log(pattern);