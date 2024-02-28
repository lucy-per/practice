const solution = (num, k) => {
    const number = num.toString().split("");
    let cnt = 0;
    const testK = k.toString()
    for (let i=0 ; i < number.length ; i++) {
        if (number[i] === testK) {
            // cnt += 1
            break;
        } cnt +=1
    } return cnt === number.length ? -1 : cnt+1
}