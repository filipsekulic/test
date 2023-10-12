import {Asset} from "./asset-form";

function AssetList({ assets, assetsUpdated }: { assets: Asset[], assetsUpdated: boolean }) {
    return (
        <div>
            <h2>Assets</h2>
            {assetsUpdated ? (
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
