import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-blue-200">
      <h3 className="text-lg font-bold">{property.name}</h3>
      <p>{property.address}</p>
      <p className="text-blue-900 font-semibold">${property.price}</p>
      <Link to={`/detail/${property.idProperty}`} className="text-blue-800 underline">View Details</Link>
    </div>
  );
}