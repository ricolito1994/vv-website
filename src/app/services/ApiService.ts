/*
 * This is an abstract class
 *
 * No need to instantiate :
 * `let api = new ApiService(accessToken)`
 * we just need to extend this:
 * export class MyService extends ApiService
 * when you are extending a class
 * you must inherit also the constructor
 * by using super keyword
 * and then supply the parameters
 * defined by your abstract class that you
 * want to extend
 * super(accessToken)
 * 
 * this is just a template class
 * 
 * so that we dont need to
 * explicitly define the code to
 * create an axios instance
 * everytime we request to server
 * 
*/
import axios, { 
    AxiosInstance, 
    AxiosResponse, 
    AxiosRequestConfig  
} from 'axios';
import {
    HTTPMethod, 
    EndpointType
} from "app/models/api.model";

export abstract class ApiService {
    
  accessToken: string | null;
  apiClient: AxiosInstance;
  baseUrl: string;
  abortControllerSignal: any | null;
  methodMap: Record<HTTPMethod, Function>;

  constructor(accessToken: string|null) {
    this.accessToken = accessToken;
    this.baseUrl = process.env.REACT_APP_BASE_URL ?? '';
    this.apiClient = (this.accessToken === '' || this.accessToken) ? this.getApiClientWithoutAuthentication() : this.getApiClient();
    this.methodMap = {
        get     : this.apiClient.get.bind(this.apiClient),
        post    : this.apiClient.post.bind(this.apiClient),
        patch   : this.apiClient.patch.bind(this.apiClient),
        delete  : this.apiClient.delete.bind(this.apiClient),
    };
  }

  protected getApiClientWithoutAuthentication(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  protected getApiClient(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/json',
      },
    });
  }

  public setAbortControllerSignal(signal: any | null): ApiService {
    if (!signal) throw 'what? where is your signal?';
    this.abortControllerSignal = signal;
    return this;
  }

  public request<T = any>(
    endPoint  : EndpointType,
    data?     : any,
    config?   : AxiosRequestConfig
  ): Promise<AxiosResponse <T>> {
    if (this.abortControllerSignal) {
        config = config ? { ...config, signal: this.abortControllerSignal } : 
            { signal: this.abortControllerSignal }
    }
    return (endPoint.req === 'get' || endPoint.req === 'delete') ? 
        this.methodMap[endPoint.req](endPoint.endpoint, config): 
        this.methodMap[endPoint.req](endPoint.endpoint, data, config);
  }
}