import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "../src/components/Product.jsx";
import {CartContextProvider} from "./store/cart-context.jsx";
function App() {
  // All initializing shopping cart code moves to the cart context provider.
  return (
    // In order to initialize the context with provider and give an value which can be used inside the components.
    <CartContextProvider>
      <Header />
      <Shop >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}/>
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
