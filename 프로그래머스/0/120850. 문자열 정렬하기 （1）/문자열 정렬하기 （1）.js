const solution = (my_string)=> {
    // 정규식으로 숫자 찾기, match랑 같이 사용 (문자열로 반환됨)
    // map으로 모든 요소에 Number 적용
    const search = /[0-9]/g
    const result = my_string.match(search);
    const answer = result.map(Number).sort((a, b)=> a - b)
    return answer
}