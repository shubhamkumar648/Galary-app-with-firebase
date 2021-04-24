import { useState, useEffect } from "react";
import { projectStorage,projectStore,timestamp} from "../firebase/firebase";

const UseStorage = (file) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectStore.collection('image')
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp()
        collectionRef.add({url,createdAt})
        setUrl(url);
      }
    );
  }, [file]);

  return {progress,url,error}
};


export default UseStorage;