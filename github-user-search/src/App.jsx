import Search from "./components/Search";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
}
