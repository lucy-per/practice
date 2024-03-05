const solution = (emergency) => {
    const arr = [...emergency].sort((a,b)=> b-a)
    // emergency의 값을 arr에서 찾아서 인덱스+1를 반환
    return answer = emergency.map((a) => arr.indexOf(a)+1)
}