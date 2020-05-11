import { IChart } from "../Interfaces/IChart";



export class ApiCallConfiguration {
    public get ApiUri(): string { return this.constructApiUrl(); }

    constructor(public Id: number, public Name: string, private chart: IChart, private variables: { [key: string]: string }) {
        if (chart == null) {
            throw new Error("The chart can't be null");
        }
        this.validateVariables(variables);
    }

    private validateVariables(variables: { [key: string]: string }): void {
        this.chart.Variables.forEach((variable: string) => {
            if (variables[variable] == null) {
                throw new Error(`Variable ${variable} is missing the assignment`);
            }
        });
    }

    private constructApiUrl(): string {
        let url: string = this.chart.ApiUri.FullUrl;
        let match: RegExpExecArray;
        while (match = /\{(.*?)\}/.exec(url)) {
            url = url.replace(`{${match[1]}}`, this.variables[match[1]]);
        }
        return url;
    }
}