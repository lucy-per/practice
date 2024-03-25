const solution = (a,b) => {
    const array = [];
    
    if (a == b){
        return a
    } else if (a > b) {
        for(let i=b; i<=a; i++){
            array.push(i)
        }
    } else {
        for (let i=a; i<=b; i++){
            array.push(i)
        }
    }
    return array.reduce((a,b)=> a+b)
}