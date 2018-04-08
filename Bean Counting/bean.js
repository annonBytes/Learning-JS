function countBs(str)
{
var count = 0;
  //iterates through the string to see the different letters
  for(var i = 0; i < str.length; i++)
  {
      if (str.charAt(i) == "B")  
      /*conditional statement to get the chracter at a postion 
      the count increases the number by 1 every time the character appears*/
      {
          count += 1;
      }
  }
  return count;
}

console.log(countBs("BBC"));



function countChar(letter, ch)
{
var cnt = 0;
for (var i = 0; i < letter.length; i++)
{
    if (letter.charAt(i) == ch)
    {
    cnt += 1;
    }
}
    return cnt;
}

function countBs(str){
    return countChar(str, 'k');
}

console.log(countBs("BBC"));
console.log(countBs("kakkerlak"));