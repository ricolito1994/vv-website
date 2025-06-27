import { AxiosInstance, AxiosResponse } from "axios";
import { ApiService } from "./ApiService"
import { LISTING } from "app/constants/api"

export class ListingService extends ApiService {
    
    LISTING : any;

    constructor(accessToken:any|null = null) {
        super(accessToken)
        this.LISTING = LISTING
    }

    public get <T = any> (data?: object|null): Promise<AxiosResponse<T>> {
        try {
            return this.request(this.LISTING.get(), data)
        } catch (e) {
            throw e;
        }
    }
    
    public show <T = any> (listingId: Number): Promise<AxiosResponse<T>> {
        try {
            return this.request(this.LISTING.show(listingId))
        } catch (e) {
            throw e;
        }
    }

    public patch <T = any> (listingId: Number, payload: object): Promise<AxiosResponse<T>> {
        try {
            return this.request(this.LISTING.patch(listingId), payload)
        } catch (e) {
            throw e;
        }
    }

    public post <T = any> (payload: object): Promise<AxiosResponse<T>> {
        try {
            return this.request(this.LISTING.post(), payload)
        } catch (e) {
            throw e;
        }
    }
}