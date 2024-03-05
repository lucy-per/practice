const solution = (my_string) => {
    // for of로 반복
    // !== isNaN 이면, 더하고, 
    // 연속된 숫자는 ??
    let number = ""
    for(let i of my_string){
        if (!isNaN(i)) {
            number += i
        } else {
            number += " "
        }
    } return number.split(" ").reduce((a, c)=> c === "" ? a+0 : a+Number(c), 0)
}