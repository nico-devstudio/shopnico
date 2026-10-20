import Product from "./Product";

export default function Products({
  onAdd,
  onSearch,
  products,
  category,
  cart,
}) {
  return (
    <div>
      <div className="products-heading">
        <h2>Products</h2>
        <span>
          {products.length} {products.length === 1 ? "product" : "products"}{" "}
          found
        </span>
      </div>
      <div className="products-filters">
        <div>
          <label htmlFor="product-search">Search:</label>
          <input
            id="product-search"
            type="text"
            onChange={(event) => onSearch(event.target.value)}
            className="search-input"
            placeholder="Search products..."
          />
        </div>

        <div>
          <strong>Category:</strong>
          <select
            onChange={(event) => category(event.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
      </div>

      <ol>
        {products.length > 0 ? (
          products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            const remainingStock = cartItem
              ? product.stock - cartItem.quantity
              : product.stock;

            return (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
                remainingStock={remainingStock}
              />
            );
          })
        ) : (
          <p className="empty-products">
            No products found. Try a different search or category.
          </p>
        )}
      </ol>
    </div>
  );
}
