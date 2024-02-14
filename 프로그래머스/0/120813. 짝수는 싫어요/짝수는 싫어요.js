const solution = (n) => {
    let arr = [];
    for (let i=1 ;  i <= n ; i++) {
        if (i % 2 === 0 ) {
            // % 나머지 구하는 연산자
            // / 는 단순 나눗셈
            // i % 2 = 0으로하면 오류가 남 
            // 비교는 반드시 === 으로 
            continue;
        } 
        arr.push(i);   
    }
    return arr.sort((a,b)=> a - b);
}

// for (let i = 1; i<=n; i+=2) answer.push(i)