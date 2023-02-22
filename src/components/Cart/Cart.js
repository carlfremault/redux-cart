import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.keys(products).map((cartProduct) => {
          const { title, quantity, price } = products[cartProduct];
          const total = quantity * price;
          return (
            <CartItem key={title} item={{ title, quantity, total, price }} />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
