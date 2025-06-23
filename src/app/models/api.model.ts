export type HTTPMethod =  'get' | 'post' | 'patch' | 'delete';

export interface EndpointType {    
    endpoint    : string,
    req         : HTTPMethod
}