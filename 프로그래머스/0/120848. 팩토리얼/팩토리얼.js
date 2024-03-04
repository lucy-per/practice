const solution = (n) => {
    let i = 1;
    let fac = 1;
    while (fac <= n){
        i++
        fac = fac * i
    } return i - 1
     //팩토리얼 값 > n 때 종료, i-1로 작성
}