import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { title: 'test product 1', price: 6, description: 'a first test product' },
  { title: 'test product 2', price: 9, description: 'a second test product' },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY_PRODUCTS.map((prod) => (
        <ul key={prod.title}>
          <ProductItem
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        </ul>
      ))}
    </section>
  );
};

export default Products;
