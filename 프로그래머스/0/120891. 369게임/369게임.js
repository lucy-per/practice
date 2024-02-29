const solution = (order) => {
    // order % 3 = 0 일 떄, cnt += 1
    const answer = order.toString()
                        .split("") // 여기서 배열 반환
                        // .map((a)=> Number(a) % 3 === 0 ? 1 : 0)
                        // [문제] n % 3 = 0으로 풀면, 9이상의 12, 15.. 부터 오류 발생
                        // 3, 6, 9를 지정해주어야 함
                        // 아닌데 split으로 한자리로 나누니까 그 문제가 아니라 0 문제인듯
                        // 0 % 3은 0이니까
                        .map((a)=> Number(a) === 0 ? 0 : Number(a) % 3 === 0 ? 1 : 0)
                        .reduce((a,b)=> a + b , 0)
    return answer
}