function checkCashRegister(price, cash, cid) {
  price *= 100;
  cash *= 100;
  const valores = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000],
  ];
  let change = cash - price;
  let mon = 0;
  let cop = cid;
  for (let i = 0; i < cop.length; i++) {
    console.log(cop[i][1]);
  }
  let alpha = 0.00000000000000000001;
  let sol = [];
  for (let i = 0; i < cid.length; i++) {
    cid[i][1] *= 100;
    mon += cid[i][1];
  }
  //console.log(mon);
  //if (change - 335.41 <= alpha) console.log("ok");
  if (mon < change) return { status: "INSUFFICIENT_FUNDS", change: [] };
  console.log("round 2");
  for (let i = 0; i < cop.length; i++) {
    console.log(cop[i][1]);
  }
  if (mon - change <= alpha) {
    for (let i = 0; i < cop.length; i++) {
      cop[i][1] /= 100;
    }
    return { status: "CLOSED", change: cop };
  }
  let got = 0;
  for (let i = cid.length - 1; i >= 0; i--) {
    if (change >= valores[i][1] && cid[i][1] != 0) {
      console.log("hereok");
      while (cid[i][1] > 0 && change > 0) {
        change -= valores[i][1];
        cid[i][1] -= valores[i][1];
        got += valores[i][1];
        console.log(change);
        if (change - valores[i][1] < 0) break;
      }
      sol.push([cid[i][0], got / 100]);
      got = 0;
    }

    if (change <= alpha) {
      /* console.log(change);
      for (let i = 0; i < sol.length; i++) {
        console.log(sol[i]);
      }*/
      return { status: "OPEN", change: sol };
    }
  }
  /*
  for (let i = 0; i < sol.length; i++) {
    console.log(sol[i]);
  }
  console.log("here");
  */
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

let a = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.log(a);
console.log(typeof a);
