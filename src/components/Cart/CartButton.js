import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.products);
  const nbProducts = Object.keys(cartProducts).reduce(
    (acc, curr) => acc + cartProducts[curr].quantity,
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
