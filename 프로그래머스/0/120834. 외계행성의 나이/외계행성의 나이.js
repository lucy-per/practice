const solution = (age) => {
    const alp = ["a","b","c","d","e","f","g","h","i","j"]
    // age를 분리
    // alphbet[age]로...
    // const str = age.toString().split("");
    // const answer = str.map((a,b)=> alp[a]);
    // return answer.toString().replaceAll(",", ""); 
                    // => join("")으로 대체 가능
    
    const answer = age.toString()
                      .split("")
                      .map((a,b)=> alp[a])
                      .join("")
    return answer;
    
}