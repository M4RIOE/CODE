function telephoneCheck(pal) {
  let tam = pal.length;
  let str = "";
  for (let i = 0; i < tam; i++) {
    if (pal[i] != " ") {
      str += pal[i];
    }
  }
  tam = str.length;

  if (tam < 10) return false;
  if (tam === 10) {
    console.log(tam);
    let letcheck = /\d{10}/;
    let ok = letcheck.test(str);
    if (ok) return true;
  }
  if (tam === 11) {
    console.log(tam);
    let letcheck = /^1\d{10}/;
    let ok = letcheck.test(str);

    if (ok) return true;
  }
  if (tam === 12) {
    console.log(tam);
    let letcheck = /^[(]\d{3}[)]\d{7}$/;
    let ok = letcheck.test(str);

    if (ok) return true;

    letcheck = /^\d{3}[-]\d{3}[-]\d{4}$/;
    ok = letcheck.test(str);

    if (ok) return true;
  }
  if (tam === 13) {
    console.log(tam);
    let letcheck = /^[(]\d{3}[)]\d{3}[-]\d{4}$/;
    let ok = letcheck.test(str);

    if (ok) return true;

    letcheck = /^1[(]\d{3}[)]\d{3}\d{4}$/;
    ok = letcheck.test(str);

    if (ok) return true;

    letcheck = /^1\d{3}[-]\d{3}[-]\d{4}$/;
    ok = letcheck.test(str);
    if (ok) return true;
  }

  if (tam === 14) {
    console.log(tam);
    let letcheck = /^1[(]\d{3}[)]\d{3}[-]\d{4}$/;
    let ok = letcheck.test(str);

    if (ok) return true;
  }

  return false;
}

console.log(telephoneCheck("1 555-555-5555"));
