const solution = (box, n) => {
    // 가로, 세로, 높이 를 n 으로 나눈 몫의 값
    // box배열의 모든 값을 3으로 나누기 : map
    // 배열의 모든 값을 곱하기 : reduce
    
    const arr = box.map((a)=> Math.floor(a/n))
    const answer = arr.reduce((a,b)=> a*b ,1)
    return answer
}