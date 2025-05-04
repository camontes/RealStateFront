import { createContext, useContext, useState } from "react";

const PropertyContext = createContext();

export const usePropertyContext = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ name: "", address: "", minPrice: "", maxPrice: "" });

  return (
    <PropertyContext.Provider value={{ properties, setProperties, filters, setFilters, setIsLoading, isLoading, error, setError }}>
      {children}
    </PropertyContext.Provider>
  );
};