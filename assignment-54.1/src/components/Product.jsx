const Product = ({ product }) => {
  const { image, category, title, price, oldPrice, onSale } = product;
return(
  <>
   <div className="relative bg-white p-3 rounded shadow-sm text-xs">
      {onSale && (
        <span className="absolute right-3 top-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          Sale!
        </span>
      )}

      <div className="mb-2">
        <img
          src={image}
          alt={title}
          className="w-full rounded"
        />
      </div>

      <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-0.5">
        {category}
      </p>
      <h3 className="text-sm font-medium mb-1">{title}</h3>

      <div className="flex items-baseline gap-2">
        {oldPrice && (
          <span className="text-xs text-slate-400 line-through">
            ${oldPrice.toFixed(2)}
          </span>
        )}
        <span className="text-sm font-semibold">${price.toFixed(2)}</span>
      </div>
    </div>
  </>
)

}


export default Product;