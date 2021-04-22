import UseFirestore from '../hooks/UseFirestore';

const ImageGrid = () => {
  
  const {docs} = UseFirestore('image');
   console.log(docs)
     return(
    
    <div className="img-grid">
    {/* <h1>Images</h1> */}
     { docs && docs.map(doc => (
         <div className ="img-wrap" key= {doc.id}>
        <img src = {doc.url} alt="uploaded pic" />
</div>
     ))}
     </div> 
    );
};
 
export default ImageGrid;
