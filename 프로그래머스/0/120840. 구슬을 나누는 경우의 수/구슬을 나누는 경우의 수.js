 const solution = (balls, share) => {
     // n! / n-m ! * m! 
     // n개중 m개를 뽑는 경우의 수
     // balls 중 share 개를 뽑는 경우의 수
     
     // balls ! 구하기 
     let answer1 = 1;
     for (let i = 1; i<=balls ; i++){
         answer1 = answer1 * i
     }
     
     // share ! 구하기
     let answer2 = 1;
     for (let i = 1; i <=share ; i++){
         answer2 = answer2 * i
     } 
     
     const num = balls - share
     let answer3 = 1;
     for (let i = 1 ; i<=num ; i++){
         answer3 = answer3 * i
     }
     
     return Math.round(answer1/(answer2 * answer3))
 
 }