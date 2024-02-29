const solution = (n) => {
    // n 이하 => i=1~n번 반복
    // i 의 약수  => j=1~i까지 반복
    // 6의 약수 => j= 1,2,3,4,5,6 % i 를 확인
    
    // 약수 구하기 => 최종적으로 약수의 개수 반환
    let answer = 0;
    for (let i=1; i<=n ; i++){
        let ys = [];
        for (let j=1; j<=i; j++) {
            if (i % j === 0) {
                ys.push(j)
            } // if 
        }  // for_j
        if (ys.length >= 3) {
            answer +=1
        }
    } return answer // for_i
}