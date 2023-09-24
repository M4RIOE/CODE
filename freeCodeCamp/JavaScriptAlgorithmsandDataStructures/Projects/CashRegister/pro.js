function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let mon = 0;
  let alpha = 0.00000000000000000001;
  for (let i = 0; i < cid.length; i++) {
    mon += cid[i][1];
  }
  console.log(mon);
  if (change - 335.41 <= alpha) console.log("ok");
  if (mon < change) return { status: "INSUFFICIENT_FUNDS", change: [] };

  if (mon - change <= alpha) return { status: "CLOSED", change: cid };

  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
