import React, {useState, useEffect} from 'react';
import AssetForm, {Asset} from "./asset-form";
import axios from "axios";
import AssetList from "./asset-list";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleSearchAssets = async () => {
      try {
          const response = await axios.get('http://localhost:8080/assets');
          const data = await response.data;

          setAssets(data);

      } catch (error) {
          console.error('Error:', error);
      }
  }

  useEffect(() => {
      handleSearchAssets();
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
