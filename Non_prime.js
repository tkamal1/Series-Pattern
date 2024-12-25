var temp = 1;
var Prime = "";
var Non_prime ="";
var Prime_count;
var Non_prime_Count;
var totalPrime=0;
var totalNonPrime=0;
for(let i=1;i<=20;i++)
{
  for(let j=1;j<=temp;j++)
  {
    if(temp%j==0)
    {
      Prime_count++;
    }
    else
    {
      Non_prime_Count++;
    }
  }
  if(Prime_count == 2)
  {
    Prime += temp +" ";
    
  }
  else
  {
    Non_prime += temp +" ";
  }
  Prime_count = 0;
  Non_prime_Count = 0;
  temp++;
}
console.log("Total Prime Number 1-20:",totalPrime);
console.log(Prime);
console.log("Total Non-Prime number 1-20:",totalNonPrime);
console.log(Non_prime);
