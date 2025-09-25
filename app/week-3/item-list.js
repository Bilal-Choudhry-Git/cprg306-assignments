import Item from "./item";

export default function Itemlist() {
    const items = [
    {name:"Grapes", quantity: 5, category: "Fruit" },
    {name:"Bread", quantity: 2, category: "Bakery" },
    {name:"Milk", quantity: 1, category: "Dairy" },
    {name:"Eggs", quantity: 12, category: "Dairy" },
    {name:"Potatoes", quantity: 6, category: "Vegetable" },
    ]


return (
  <ul>
    {items.map((item, index) => (
      <Item
        key={index}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    ))}
  </ul>
);
}