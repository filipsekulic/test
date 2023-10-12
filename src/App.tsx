import React, {useState, useEffect} from 'react';
import AssetForm, {Asset} from "./asset-form";
import axios from "axios";
import AssetList from "./asset-list";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    // Make a GET request to fetch assets when the component mounts
    axios
        .get('/assets')
        .then((response) => {
          if (Array.isArray(response.data)) {
            setAssets(response.data);
          }
        })
        .catch((error) => {
          // Handle errors if needed
          console.error('Error:', error);
        });
  }, []);

  return (
      <div>
        <h1>Asset Management</h1>
        <AssetForm />
        <AssetList assets={assets} />
      </div>
  );
}

export default App;
