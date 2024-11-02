import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Store";

function Nonveg() {

  const dispatch=useDispatch();

  const nonvegproducts = useSelector(state => state.products.Nonveg)
  const items = nonvegproducts.map((product, index) =>
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)}&emsp;&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>

  )
  return (
    <>
      <h1>
        Non veg Products
      </h1>
      <ul>
        {items}
      </ul>
    </>
  )
}

export default Nonveg
