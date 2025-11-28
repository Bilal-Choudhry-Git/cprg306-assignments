export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  return (
    <div className="flex justify-center items-center">
      <ul
        className="bg-[#1f2a44] text-white p-2 mb-2 rounded-md shadow-md w-52 cursor-pointer"
        onClick={() => onSelect(item)}
      >
        <li className="text-left">
          <p className="font-bold">{name}</p>
          <p className="text-sm font-normal">Buy {quantity} in {category}</p>
        </li>
      </ul>
    </div>
  );
}
