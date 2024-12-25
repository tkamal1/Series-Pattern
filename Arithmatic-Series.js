// 1 4 7 10 13 16 19 22 25 28 .......
temp = 1;
pattern = "";
for(let i = 1; i<=10;i++)
{
  pattern += temp+" ";
  temp +=3;
}
console.log(pattern);
