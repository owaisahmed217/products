import React from 'react';

const ProductList = ({ products, removeProduct, updateProduct }) => {
    const handleRemove = (id) => {
        console.log(`Remove clicked for id: ${id}`); // Debug log
        if (window.confirm('Are you sure you want to remove this product?')) {
            removeProduct(id);
        }
    };

    const handleUpdate = (id) => {
        console.log(`Update clicked for id: ${id}`); // Debug log

        const newName = prompt('Enter new product name:');
        const newPrice = prompt('Enter new price:');
        const newImgSrc = prompt('Enter new image URL:'); // Prompt for the new image URL

        if (newName && !isNaN(parseFloat(newPrice))) {
            updateProduct({ id, name: newName, price: parseFloat(newPrice), imgSrc: newImgSrc }); // Include imgSrc
        } else {
            alert('Invalid input. Please enter a valid name and price.');
        }
    };


    return (
        <section className="product-list">
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                            <img
                                src={product.imgSrc}
                                alt={product.name}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => handleUpdate(product.id)}>Edit</button>
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ProductList;



