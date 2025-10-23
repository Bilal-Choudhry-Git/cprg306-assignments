import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <NewItem />
      <ItemList />
    </main>
  );
}
