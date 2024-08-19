import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// Action Creators
export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const response = await axios.get(`${API_URL}/products`);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message || 'Unable to fetch products' });
    }
};

export const addProduct = (product) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/products`, product);
        dispatch({ type: ADD_PRODUCT, payload: response.data });
    } catch (error) {
        console.error('Failed to add product:', error);
    }
};

export const removeProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
        dispatch({ type: REMOVE_PRODUCT, payload: id });
    } catch (error) {
        console.error('Failed to remove product:', error);
    }
};

export const updateProduct = (product) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/products/${product.id}`, product);
        dispatch({ type: UPDATE_PRODUCT, payload: response.data });
    } catch (error) {
        console.error('Failed to update product:', error);
    }
};


