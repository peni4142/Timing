import { ApiUri } from "../Common/ApiUri";

export interface IChart {
    ApiUri: ApiUri;
    ImageSrc: string;
    Description: string;
    Id:number;
    Variables:string[];
}
