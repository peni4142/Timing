import { IChart } from "./IChart";
import { ApiCallConfiguration } from "../Common/ApiCallConfiguration";

export interface IStorage {
    GetStoredCharts(): IChart[];
    GetStoredChart(id: number): IChart;
    StoreChart(chart: IChart): void;

    GetStoredApiCallConfigurations(): ApiCallConfiguration[];
    GetStoredApiCallConfiguration(id: number): ApiCallConfiguration;
    StoreApiConfiguration(apiCallConfiguration: ApiCallConfiguration): void;
}