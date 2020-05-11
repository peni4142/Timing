import { IStorage } from "../Interfaces/IStorage";
import { IChart } from "../Interfaces/IChart";
import { ApiUri } from "../Common/ApiUri";
import { ApiCallConfiguration } from "../Common/ApiCallConfiguration";


export class FakeStorage implements IStorage {

    private readonly exampleChart: IChart = {
        Description: "Is a very cool thing",
        Id: 1,
        ImageSrc: "imgSrc",
        ApiUri: new ApiUri("apiCall"),
        Variables: ["Variable1", "Variable2"]
    };

    GetStoredCharts(): IChart[] {
        let list: IChart[] = [];
        for (let i: number = 0; i < 10; i++) {
            let copy: IChart = { ...this.exampleChart };
            copy.Id += i;
            list.push(copy);
        }
        return list;
    }

    GetStoredChart(id: number): IChart {
        let copy: IChart = { ...this.exampleChart };
        copy.Id = id;
        return copy;
    }

    StoreChart(chart: IChart): void { /*Fake*/ }


    GetStoredApiCallConfigurations(): ApiCallConfiguration[] {
        const listApiCallConfiguration: ApiCallConfiguration[] = [];
        for (let i: number = 0; i < 10; i++) {
            listApiCallConfiguration.push(this.GetStoredApiCallConfiguration(i));
        }
        return;
    }

    GetStoredApiCallConfiguration(id: number): ApiCallConfiguration {
        return new ApiCallConfiguration(id, "Name " + id, this.exampleChart, { Variable1: "Value1", Variable2: "Value2" });
    }

    StoreApiConfiguration(apiCallConfiguration: ApiCallConfiguration): void { /*Fake*/ }



}
