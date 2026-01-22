import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-6 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
