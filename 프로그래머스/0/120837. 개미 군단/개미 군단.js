const solution = (hp) => {
    // 장군 5
    // 병정 3
    // 일 1
    // 최소한의 병력
    // 23 => 5,5,5,5,3
    // 24 => 5,5,5,5,3,1
    // 999 => 995까지 장군 = 199마리, 3, 1
    // 5로 나눈 몫 + 나머지를 3으로 나눈 몫 + 나머지 
    
    const JG = Math.floor(hp / 5)
    const BJ = Math.floor((hp % 5) / 3)
    const IL = (hp % 5) % 3
    return JG + BJ + IL
    
}