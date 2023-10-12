import {Asset} from "./asset-form";

function AssetList({ assets, assetsLoading }: { assets: Asset[], assetsLoading: boolean }) {
    return (
        <div>
            <h2>Assets</h2>
            {assetsLoading ? (
                <p>Assets loading...</p>
            ) : (
                <ul>
                    {assets.map((asset, index) => (
                        <li key={index}>
                            Asset Name: {asset.assetName}, Quantity: {asset.quantity}
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    );
}

export default AssetList;
