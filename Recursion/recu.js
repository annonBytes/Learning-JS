function isEven (num1)
{
    if (num1 == 0)
    return true;

    else if (num1 == 1)
    return false;

    else if (num1 < 0)
    return isEven(- num1);

    else return isEven(num1 - 2);


}
console.log(isEven(50));
console.log(isEven(75));