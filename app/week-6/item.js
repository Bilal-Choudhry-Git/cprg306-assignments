export default function Item({ item }) {
  const { name, quantity, category } = item; 

  return (
    <div className="flex justify-center items-center"> 
      <ul className="bg-neutral-700 text-white p-2 mb-3 rounded-md shadow-md w-80">
        <li className="text-lg font-bold text-left" >
          <p>{name}</p>
          <p className="text-sm font-normal">Buy {quantity} in {category}</p>
        </li>
      </ul>
    </div>
  );
}