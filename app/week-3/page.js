import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 max-w-2xl mx-auto bg-gray-50 rounded-lg ">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}