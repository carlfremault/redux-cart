import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const nbProducts = Object.keys(cart).reduce(
    (acc, curr) => acc + cart[curr].quantity,
    0
  );

  const handleCartButtonClick = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={handleCartButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{nbProducts}</span>
    </button>
  );
};

export default CartButton;
