import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/shop/Products';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;