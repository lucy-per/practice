const solution = (numbers) => {
    const multipleNumbers = numbers.map((value)=> value * 2 )
    return multipleNumbers
    // return을 하지 않으면 undefied가 되니 유의하자
}

// const를 쓰지 않고 바로 return multipleNumbers = numbers.map((value)=> value * 2 ) 도 가능
// map이 아닌 reduce를 사용해서 나타낼 수도 있음
// function solution(numbers) {
//     return numbers.reduce((a, b) => [...a, b * 2], []);
// }
// array.reduce(콜백함수, 초기값)
