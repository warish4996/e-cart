/**
 * Base Url constants declaration for different environments
 */
const baseUrl = 'https://nodeshop97.herokuapp.com/'

/**
 * API endpoints for Signup
 */

export const signUpUrl = `${baseUrl}signup`;


/**
 * API endpoints for login
 */

export const loginUrl = `${baseUrl}admin/login`;

/**
 * API endpoints for products
 */

export const productsUrl = `${baseUrl}products`;

/**
 * API endpoints for Cart
 */

export const addToCartUrl = `${baseUrl}add-to-cart?id=`;
export const fetchCartUrl = `${baseUrl}fetch-cart-items`;
export const removeCartProductUrl = `${baseUrl}remove-item-from-cart?id=`;


/**
 * API endpoints for order
 */

export const orderMakingUrl = `${baseUrl}create-order`;
export const orderFetchUrl = `${baseUrl}orders`;

/**
 * API endpoints for admin
 */
export const adminProductUrl = `${baseUrl}admin/products`;
export const removeAdminProductUrl = `${baseUrl}admin/delete-product?id=`;
export const addAdminProductUrl = `${baseUrl}admin/add-product`;
export const editAdminProductUrl = `${baseUrl}admin/update-product`;