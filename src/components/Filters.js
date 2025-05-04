import { usePropertyContext } from "../context/PropertyContext";

export default function Filters({ onSearch }) {
  const { filters, setFilters } = usePropertyContext();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <input className="border p-2 rounded" placeholder="Name" value={filters.name} onChange={(e) => setFilters(f => ({ ...f, name: e.target.value }))} />
      <input className="border p-2 rounded" placeholder="Address" value={filters.address} onChange={(e) => setFilters(f => ({ ...f, address: e.target.value }))} />
      <input className="border p-2 rounded" type="number" placeholder="Min Price" value={filters.minPrice} onChange={(e) => setFilters(f => ({ ...f, minPrice: e.target.value }))} />
      <input className="border p-2 rounded" type="number" placeholder="Max Price" value={filters.maxPrice} onChange={(e) => setFilters(f => ({ ...f, maxPrice: e.target.value }))} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSearch}>Search</button>
    </div>
  );
}
