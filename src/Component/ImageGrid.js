import UseFirestore from "../hooks/UseFirestore";

const ImageGrid = ({setselectedImage}) => {
  const { docs } = UseFirestore("image");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}
          onClick={()=> setselectedImage(doc.url)}
          
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
