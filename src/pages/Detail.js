import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyDetail } from "../services/propertyService";
import PropertyDetail from "../components/PropertyDetail";
import { ClipLoader } from "react-spinners";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const loadDetail = async () => {
      const data = await fetchPropertyDetail(id);
      setDetail(data);
    };

    loadDetail();
  }, [id]);

  if (!detail){
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="blue" size={100} />
      </div>
    );
  }

  return <PropertyDetail detail={detail} />;
}