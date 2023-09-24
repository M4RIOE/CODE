/*console.log(4);
console.log(String.fromCharCode(65));

console.log(5);*/

function rot13(str) {
  let tmp = "";
  let sol = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      if (str[i] >= "N") {
        tmp = String.fromCharCode(str.charCodeAt(i) - 13);
        //str[i]=tmp;
      } else {
        tmp = String.fromCharCode(str.charCodeAt(i) + 13);
      }
      sol += tmp;
    } else sol += str[i];
  }
  //console.log(sol);
  //console.log(str)
  return sol;
}

rot13("SERR PBQR PNZC");
