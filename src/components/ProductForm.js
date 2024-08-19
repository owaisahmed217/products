// src/components/ProductForm.js

import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ProductForm = ({ newProduct, setNewProduct, handleAddProduct }) => {
    return (
        <Box component="form" noValidate autoComplete="off" sx={{ mb: 3 }}>
            <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <TextField
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <TextField
                label="Image URL"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.imgSrc}
                onChange={(e) => setNewProduct({ ...newProduct, imgSrc: e.target.value })}
            />
            <Button variant="contained" color="primary" onClick={handleAddProduct} sx={{ mt: 2 }}>
                Add Product
            </Button>
        </Box>
    );
};

export default ProductForm;
