function Cart() {
  let p1 = 8;
  let p2 = 10;
  let p3 = 15;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        <li>monstera: ${p1}</li>
        <li>ivy: ${p2}</li>
        <li>bunch: ${p3}</li>
      </ul>
      Total: ${p1 + p2 + p3}
    </div>
  );
}
export default Cart;
