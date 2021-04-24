import React,{useState} from 'react';
import './index.css';
import Title from "./Component/Title"
import UploadForm from './Component/Uploadform';
import ImageGrid from './Component/ImageGrid';
import Modal from './Component/Modal';

function App() {

  const[selectImage,setselectedImage] = useState(null)

  return (
    <div className="App">
    <Title/>
    <UploadForm/>
    <ImageGrid setselectedImage={setselectedImage}/>
     {selectImage && <Modal selectImage={selectImage} setselectedImage={setselectedImage}/>}    
</div>
  );
}

export default App;
