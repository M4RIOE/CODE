function palindrome(str) {
  //console.log(str.length);
  let longHand = /[A-Za-z0-9]+/;
  let ans = "";
  //console.log(ans);
  for (let i = 0; i < str.length; i++) {
    if (longHand.test(str[i])) {
      ans += str[i];
    }
  }
  ans = ans.toLowerCase();
  /*
  for(let i=0;i<ans.length;i++){
      if(ans[i]>='A' && ans[i]<='Z'){
          ans[i]=ans[i].toLowerCase();
      }
  }*/
  //console.clear();
  console.log(ans);
  let cont = 1;
  let flag = true;
  for (let i = 0; i < ans.length / 2; i++) {
    if (ans[i] != ans[ans.length - i - 1]) {
      console.log(i);

      flag = 0;
    }
  }
  console.log(flag);
  if (flag === true) return true;
  return false;
}

palindrome("A man, a plan, a canal. Panama");
