import { format, parseISO } from "date-fns";
import PropertyImage from "./PropertyImage";
import PropertyTrace from "./PropertyTrace";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PropertyDetail({ detail }) {

    const birthday = "1997-11-15T00:00:00-05:00";
    const formattedBirthday = format(parseISO(birthday), "dd/MM/yyyy");
    return (
      <div className="p-6 space-y-6">
        <Link to="/" className="text-blue-300 underline"><IoMdArrowRoundBack size={60} className="text-blue-300" style={{cursor:"pointer"}}/></Link>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-blue-200">
          <h3 className="text-xl font-semibold mt-4">Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {detail.images.map((img) => (
              <PropertyImage key={img.idPropertyImage} image={img} />
            ))}
          </div>
        </div>
        
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-blue-200">
          <h3 className="text-xl font-semibold mt-4">Owner</h3>
          <p>Name: {detail.owner.name}</p>
          <p>Address: {detail.owner.address}</p>
          <p>Birthday:{formattedBirthday}</p>
          <img key={detail.owner.idOwner} src={detail.owner.photo} alt={detail.owner.name} className="rounded shadow" />
        </div>
  
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-blue-200">
          <h3 className="text-xl font-semibold mt-4">Traces</h3>
          <ul className="list-disc pl-5">
            {detail.traces.map((trace) => (
              <PropertyTrace key={trace.idPropertyTrace} trace={trace} />
            ))}
          </ul>
        </div>
      </div>
    );
  }