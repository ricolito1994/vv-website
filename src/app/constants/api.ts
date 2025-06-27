import { EndpointType } from "app/models/api.model";
/**
 * api routes
 * 
 * scheme:
 * each index at the most parent
 * are the prefix to contain
 * each individual route
 * according to its specific
 * business logic.
 * 
 * in the backend, we 
 * must acheive these or we map
 * our routes according to
 * this scheme.
 * 
 * for ex., user
 * under user there are
 * auth and get_users so the parent
 * is user as the prefix
 * 
 * endpoint ex: 
 * http://localhost:8080/user/auth or 
 * http://localhost:8080/user/get_user
 * 
 */

const BASE_URL = process.env.REACT_APP_BASE_URL;

const USER: Object = {
    'auth'         : (payload: any):        string => `${BASE_URL}/user/auth`,
    'show'         : (userId: Number):      string => `${BASE_URL}/user/get_user/${userId}`
}

/*
*
* Use this pattern if you create your own endpoint
* and include it on the export 
* so that you can use it outside
* this file
* 
* EndpointType is a model that defines
* the return type of each endpoint object
* @return
* endpoint: string
* req: HTTPMethod - get | post | patch | delete 
* basic CRUD
*
*/
const LISTING: Object = {
    'get'          : ()                 :   EndpointType => ({endpoint: `${BASE_URL}/listing`,  req: "get"}),
    'post'         : ()                 :   EndpointType => ({endpoint: `${BASE_URL}/listing`,  req: "post"}),
    'show'         : (listingId: Number):   EndpointType => ({endpoint: `${BASE_URL}/listing/${listingId}`,  req: "get"}),
    'patch'        : (listingId: Number):   EndpointType => ({endpoint: `${BASE_URL}/listing/${listingId}`,  req: "patch"}),
    'delete'       : (listingId: Number):   EndpointType => ({endpoint: `${BASE_URL}/listing/${listingId}`,  req: "delete"}),
}

/*
 * I added to export BASE_URL just in case
 * If you want to import this to your service class
 * you can do is import { API } from 'app/constants/api' 
 * if you want to include the BASE_URL
 * import { API, BASE_URL } from 'app/constants/api'
 * 
*/
export { 
    BASE_URL,
    LISTING,
    USER,
};