import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {properties.map((p) => <PropertyCard key={p.idProperty} property={p} />)}
    </div>
  );
}