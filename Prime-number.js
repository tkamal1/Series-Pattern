// Prime Number 
// 2 3 5 7 11 13 17 19 

var temp=1;
var Prime = "";
var count;
for(let i=1;i<=20;i++)
{
  for(let j=1;j<=temp;j++)
  {
    if(temp%j==0)
    {
      count++;
    }
  }
  if(count == 2)
  {
    Prime += temp+" ";
  }
  count = 0;
  temp++;
}
console.log(Prime)
