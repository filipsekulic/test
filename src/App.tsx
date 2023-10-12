import React, {useState, useEffect} from 'react';
import AssetForm, {Asset} from "./components/asset-form";
import axios from "axios";
import AssetList from "./components/asset-list";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsUpdated, setAssetsUpdated] = useState(true);

  const handleSearchAssets = async () => {

      try {
          const response = await axios.get('http://localhost:8080/assets');
          const data = await response.data;

          setAssets(data);
          setAssetsUpdated(false);
      } catch (error) {
          console.error('Error:', error);
      }
  }

  useEffect(() => {
      handleSearchAssets();
  }, [assetsUpdated]);

  return (
      <div>
        <h1>Asset Management</h1>
        <AssetForm setAssetsUpdated={setAssetsUpdated} />
        <AssetList assets={assets} assetsUpdated={assetsUpdated} />
      </div>
  );
}

export default App;
