import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./cartSlice";

function App() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const sampleProduct = {
    id: 1,
    title: "Laptop",
    price: 50000,
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🛒 Shopping Cart</h2>
      
      <button onClick={() => dispatch(addToCart(sampleProduct))}>
        Add to Cart
      </button>

      <button onClick={() => dispatch(removeFromCart(sampleProduct.id))}>
        Remove from Cart
      </button>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} — {item.quantity} x ₹{item.price} = ₹{item.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
