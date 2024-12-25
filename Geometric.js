// 5 10 20 40 80 160 320 640 1280 2560 ......
var temp = 5;
var x = 0;
var pattern = "";
for(let i=1; i<=10; i++)
{
  x = temp; 
  pattern += x+" ";

  temp =x*2;
}
console.log(pattern);