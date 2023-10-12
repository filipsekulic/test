import {Asset} from "./asset-form";

function AssetList({ assets }: { assets: Asset[] }) {
    return (
        <div>
            <h2>Assets</h2>
            <ul>
                {assets.map((asset, index) => (
                    <li key={index}>
                        Asset Name: {asset.assetName}, Quantity: {asset.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AssetList;
