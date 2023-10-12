import React, { useState } from 'react';
import axios from "axios";

export interface Asset {
    assetName: string;
    quantity: number;
}

function AssetForm({ setAssetsLoading }: { setAssetsLoading: (updated: boolean) => void }) {
    const [assetName, setAssetName] = useState<string>('');
    const [quantity, setQuantity] = useState<number | ''>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (assetName !== '' && quantity > 0) {
            try {
                const response = await axios.post('http://localhost:8080/assets', {
                    assetName,
                    quantity: parseInt(quantity as string),
                });

                if (response.status === 200) {
                    setAssetName('');
                    setQuantity('');
                    setAssetsLoading(true);
                } else {
                    console.error('Error:', response);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            window.alert('Asset name is empty or quantity is equal or less than 0')
        }
    };

    return (
        <div>
            <h2>POST Asset</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Asset Name"
                    value={assetName}
                    onChange={(e) => setAssetName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity === '' ? '' : quantity.toString()}
                    onChange={(e) => setQuantity(e.target.value === '' ? '' : parseInt(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AssetForm;