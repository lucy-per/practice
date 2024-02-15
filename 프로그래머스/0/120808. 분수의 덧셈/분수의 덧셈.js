const solution = (numer1, denom1, numer2, denom2) => {
// 분수의 덧셈
const PlusNumer = numer1*denom2 + numer2*denom1;
const PlusDenom = denom1*denom2;
    
const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };
    
// 최대공약수 구하기
const resultGcd = gcd(PlusNumer, PlusDenom)

const resultNumer = PlusNumer / resultGcd
const resultDenom = PlusDenom / resultGcd

// 결과 배열 출력
const result = [resultNumer, resultDenom]
return result;
}
