import { format, parseISO } from "date-fns";

function PropertyTrace({ trace }) {
  const dateSale = trace.dateSale;
    const dateSaleFormatted = format(parseISO(dateSale), "dd/MM/yyyy");
  return (
    <>
        <div className="flex items-center mb-2 border rounded shadow-sm bg-white">
          <div>
            <h3 className="text-lg font-semibold">{trace.name}</h3>
            <p className="text-gray-600">Date Sale: {dateSaleFormatted}</p>
            <p className="text-gray-600">Value: $ {trace.value}</p>
            <p className="text-gray-600">Tax: $ {trace.tax}</p>
          </div>
        </div>
    </>
  );
}

export default PropertyTrace;