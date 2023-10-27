import React, {useState, useEffect} from 'react';
import AssetForm, {Asset} from "./components/asset-form";
import axios from "axios";
import AssetList from "./components/asset-list";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsLoading, setAssetsLoading] = useState(true);

  const handleSearchAssets = async () => {

      try {
          const response = await axios.get('http://localhost:8080/assets');
          const data = await response.data;

          setAssets(data);
          setAssetsLoading(false);
      } catch (error) {
          console.error('Error:', error);
      }
  }

  useEffect(() => {
      handleSearchAssets();
  }, [assetsLoading]);

  return (
      <div>
        <h1>Asset Management</h1>
        <AssetForm setAssetsLoading={setAssetsLoading} />
        <AssetList assets={assets} assetsLoading={assetsLoading} />
      </div>
  );
}

export default App;
