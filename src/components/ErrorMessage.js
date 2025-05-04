export default function ErrorMessage({ message }) {
    return (
      <div>
        <p className="text-red-600 text-xl font-semibold">{message}</p>
      </div>
    );
  }