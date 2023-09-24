/*

function bins(li, ls, nn) {
  let mid = (li + ls) / 2;
  console.log(mid);
  if (nn >= mid) {
    li = mid;
  } else if (nn < mid) {
    ls = mid;
  }
  return bins(li, ls, nn);
}
*/

var arr = [
  { le: "I", val: 1 },
  { le: "IV", val: 4 },
  { le: "V", val: 5 },
  { le: "IX", val: 9 },
  { le: "X", val: 10 },
  { le: "XL", val: 40 },
  { le: "L", val: 50 },
  { le: "XC", val: 90 },
  { le: "C", val: 100 },
  { le: "CD", val: 400 },
  { le: "D", val: 500 },
  { le: "CM", val: 900 },
  { le: "M", val: 1000 },
];
let sol = "";
function convertToRoman(num) {
  //let a = bins(0, 900, 150);
  while (num >= 1000) {
    sol += "M";
    num -= 1000;
  }
  while (num > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (num < arr[i].val) {
        sol += arr[i - 1].le;
        num -= arr[i - 1].val;
        //console.log(sol);
        break;
      }
    }
  }

  console.log(typeof sol);
  return sol;
}

convertToRoman(4999);
