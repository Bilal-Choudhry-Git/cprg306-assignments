export default function Item({ name, quantity, category }) {
  return (
    <li>
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <div className="text-sm font-semibold text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm font-semibold text-gray-600">Category: {category}</div>
    </li>
  );
}