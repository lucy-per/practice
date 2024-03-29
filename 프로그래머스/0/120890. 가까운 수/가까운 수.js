const solution = (array, n) => {
    // 차의 절댓값이 가장 작은 값의 인덱스를 반환하기
    // 가까운 수가 여러 개인 경우 더 작은 수를 반환하기
    // => 무조건 내림차순으로 정렬한 뒤에 값 반환하기
    const newArr = array.sort((a,b)=> a-b)
    const absArr = newArr.map((a)=> Math.abs(a-n))
    const minIndex = absArr.indexOf(Math.min(...absArr))
    return newArr[minIndex] 
}