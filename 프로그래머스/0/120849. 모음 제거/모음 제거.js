const solution = (my_string) => {
    // replaceAll을 사용해서 없애버리기
    // 반복문 사용하기 / for 안에서 answer 재선언 x
    const moeum = ["a", "e", "i", "o", "u"]
    let answer = my_string;
    for (let i=0; i<moeum.length ; i++) {
      answer = answer.replaceAll(moeum[i], "")
    } return answer
}