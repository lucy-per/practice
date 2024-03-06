const solution = (numbers, k) => {
    let answer = 2*(k-1)
    // return answer <= numbers.length
    // ? numbers[answer]
    // : numbers[answer - numbers.length]
    
// 두바퀴 이상 돌았을 때를 위해서, 반복문으로 작성
    while (answer > numbers.length) {
        answer = answer - numbers.length
    }  return numbers[answer]
}