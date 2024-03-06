const solution = (n) => {
    let answer=[];
    for ( let i = 2 ; i <= n ;) {
        if (n%i === 0) {
            answer.push(i)
            n = n / i
        } else { i++ }
    } 
    const result = new Set(answer);
    return Array.from(result)
}