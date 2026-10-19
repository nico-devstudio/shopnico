export default function CartItem({ onAdd, onDeduct, product, onRemove }) {
  return (
    <li className="cart-item">
      <div>
        <button onClick={() => onRemove(product.id)} className="remove-btn">
          Remove
        </button>
        <h4>{product.name}</h4>
        <button
          onClick={() => onDeduct(product.id)}
          className="quantity-btn"
          disabled={product.quantity === 1}
        >
          {" "}
          -{" "}
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => onAdd(product.id)}
          className="quantity-btn"
          disabled={product.quantity >= product.stock}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        ${product.price} x {product.quantity} <br />
        Subtotal: ${(product.price * product.quantity).toFixed(2)}
      </div>
    </li>
  );
}
