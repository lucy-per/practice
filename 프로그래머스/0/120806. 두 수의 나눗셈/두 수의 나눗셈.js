const solution = (num1, num2) => {
    const value = (num1/num2) * 1000 ;
    return Math.floor(value);
}

// 작성가능한 방법
//  1. return Math.trunc(num1 / num2 * 1000) 
// trunc는 소수점 이하 다 버림 vs floor는 소수점 내림
//  2. return ~~ (num1 / num2 * 1000)
// ~~ 은 Math.floor와 같은 기능
