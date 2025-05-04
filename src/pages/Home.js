import { useEffect } from "react";
import Filters from "../components/Filters";
import PropertyList from "../components/PropertyList";
import { usePropertyContext } from "../context/PropertyContext";
import { fetchProperties } from "../services/propertyService";
import { ClipLoader } from "react-spinners";
import ErrorMessage from "../components/ErrorMessage";


export default function Home() {
  const { properties, setProperties, filters,setIsLoading, isLoading, error, setError } = usePropertyContext();

  const loadProperties = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProperties(filters);
      setProperties(data);
    } catch (err) {
      setError("Failed to load properties. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div>
      <Filters onSearch={loadProperties} />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader color="blue" size={80} />
        </div>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : properties.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <h1 className="text-2xl font-bold">No properties found</h1>
        </div>
      ) : (
        <PropertyList properties={properties} />
      )}
    </div>
  );
}