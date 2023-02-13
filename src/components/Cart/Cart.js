import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartProducts = useSelector((state) => state.products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.keys(cartProducts).map((cartProduct) => {
          const { title, quantity, price } = cartProducts[cartProduct];
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
