const solution = (n) => {
   const num = Math.sqrt(n)
   return num == parseInt(num) ? (num+1)*(num+1) : -1

}