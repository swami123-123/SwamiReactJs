import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteFromCart, removeFromCart } from "./Store";
import { useRef, useState } from "react";
import './Cart.css';

function Cart() {

  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const dispatch = useDispatch();
  const coupons=['swami10','swami20','swami30']

  const items = cart.map((product, index) =>
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)}  -{product.quantity}&emsp;
      <button onClick={() => dispatch(addToCart(product))}>+</button>&emsp;
      <button onClick={() => dispatch(removeFromCart(product))}>-</button>&emsp;
      <button onClick={() => dispatch(deleteFromCart(product))}>Remove</button>
    </li>
  );
  const [coupon, setCoupon] = useState(0);
  const [couponMsg,setCouponMsg]=useState(null);
  const [discount, setDiscount] = useState(0);
  const couponref=useRef(null);

    const discount10 = () => {
      setDiscount(total - (total * 0.1));
    }
    const discount20 = () => {
      setDiscount(total - (total * 0.2));
    }
    const discount30 = () => {
      setDiscount(total - (total * 0.3));
    }
    const discount40 = () => {
      setDiscount(total - (total * 0.4));
    }
    const applycoupon=()=>
      {
             const stat=coupons.find(codes=>codes===couponref.current.value);
             if(stat)
             {
              switch (couponref.current.value) {
                case 'swami10':setCoupon(total*0.1);
                setCouponMsg('swami10 coupon applied!');
                    break;
                    case 'swami20':setCoupon(total*0.2);
                    setCouponMsg('swami20 coupon applied!');
                    break;
                    case 'swami30':setCoupon(total*0.3);
                    setCouponMsg('swami30 coupon applied!');
                    break;
              
                default:setCouponMsg('invalid coupon');
                  break;
              }
            }
              else{
                setCouponMsg('invalid coupon');
              }
             
            
    }
  

  return (
    <>
      <h1>This is cart page</h1>
      {items}
      <p>Total bill: {total.toFixed(2)}</p>
    
      <p>Enter the coupon code:<input ref={couponref} type="text" placeholder="Enter coupon code"/></p>
      < button onClick={applycoupon}>Apply</button>
      <p>{coupon.toFixed(2)}</p>
      <p>{couponMsg}</p>


      <p>
        {<button onClick={discount10}>10% discount</button>}&emsp;
        {<button onClick={discount20}>20% discount</button>}&emsp;
        {<button onClick={discount30}>30% discount</button>}&emsp;
        {<button onClick={discount40}>40% discount</button>}&emsp;
      </p>

      <p>After Discount Bill : {discount.toFixed(2)}



      </p>
    </>
  )
}

export default Cart;
