import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './ProductItem.module.css';

const ProductItem = ({ title, price, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addProduct({ title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
