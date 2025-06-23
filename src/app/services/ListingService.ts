import { AxiosInstance, AxiosResponse } from "axios";
import { ApiService } from "./ApiService"
import { LISTING } from "app/constants/api"

export class ListingService extends ApiService {
    LISTING : any;
    constructor(accessToken:any) {
        super(accessToken)
        this.LISTING = LISTING
    }

    public getListing <T = any> (abortControllerSignal? :any): Promise<AxiosResponse<T>> {
        try {
            if (abortControllerSignal) 
                return this.setAbortControllerSignal(abortControllerSignal)
                    .request(this.LISTING.get())
                    
            return this.request(this.LISTING.get())
        } catch (e) {
            throw e;
        }
    }
}