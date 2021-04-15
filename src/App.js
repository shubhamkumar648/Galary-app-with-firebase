import './index.css';
import Title from "./Component/Title"
import UploadForm from './Component/Uploadform';
import ImageGrid from './Component/ImageGrid';

function App() {
  return (
    <div className="App">
    <Title/>
    <UploadForm/>
    <ImageGrid/>
    </div>
  );
}

export default App;
