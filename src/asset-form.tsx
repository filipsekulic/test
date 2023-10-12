import React, { useState } from 'react';
import axios from "axios";

export interface Asset {
    assetName: string;
    quantity: number;
}

// Component for the POST form
function AssetForm() {
    const [assetName, setAssetName] = useState<string>('');
    const [quantity, setQuantity] = useState<number | ''>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/asset', {
                assetName,
                quantity: parseInt(quantity as string),
            });

            if (response.status === 200) {
                // Success - do something if needed
                setAssetName('');
                setQuantity('');
            } else {
                // Handle errors if the server returns a 500 status
                console.error('Error:', response);
            }
        } catch (error) {
            // Handle other errors like network issues
            console.error('Error:', error);
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
                    value={quantity === '' ? '' : quantity.toString()} // Convert to string if not empty
                    onChange={(e) => setQuantity(e.target.value === '' ? '' : parseInt(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AssetForm;