import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Store";


function Veg() {

  const dispatch=useDispatch();
  const vegproducts = useSelector(state => state.products.veg)
  const items = vegproducts.map((product, index) =>
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)}&emsp;&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </li>

  )
  return (
    <><center>
      <h1>
        Veg Products
      </h1>
      <ul>
        {items}
      </ul>
      </center>
    </>
  )
}

export default Veg
