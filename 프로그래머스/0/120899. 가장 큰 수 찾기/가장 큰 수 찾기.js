const solution = (array) => {
    // 가장 큰 수 구하기
    const maxArr = array.slice()
    maxArr.sort((a,b)=> b-a)
    const max = maxArr[0]
    
    // 인덱스 구하기
    const maxIndex = array.indexOf(max)
    
    // 가장 큰 수, 인덱스 배열 반환하기
    const answer = [max, maxIndex]
    return answer
}