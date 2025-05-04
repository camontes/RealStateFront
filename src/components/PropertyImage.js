function PropertyImage({ image }) {
  return (
    <div className="property-image">
      <img width="400px" height="400px" src={image.file} alt="Property" className="rounded shadow" />
    </div>
  );
}

export default PropertyImage;