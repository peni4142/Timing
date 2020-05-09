import { throws, equal } from "assert";
import { ApiCallConfiguration } from "../../logic/Common/ApiCallConfiguration";
import { IChart } from "../../logic/Interfaces/IChart";
import { ApiUri } from "../../logic/Common/ApiUri";



const Chart: IChart = {
    Id: 1,
    ImageSrc: "imgSrc",
    ApiUri: new ApiUri("apiCall"),
    Description: "description",
    Variables: []
};

suite("ApiCallConfiguration", () => {
    suite("constructor", () => {
        test("Should thrown an error if chart is null", () => {
            // tslint:disable-next-line: no-unused-expression
            throws(() => { new ApiCallConfiguration(1, null, null); });
        });
    });

    suite("validateVariables", () => {

        test("Should do nothing if there are no variables", () => {
            // tslint:disable-next-line: no-unused-expression
            new ApiCallConfiguration(1, Chart, null);
        });

        test("Should throw when variable is missing", () => {
            let chart: IChart = { ...Chart };
            chart.Variables = ["v1", "v2"];
            // tslint:disable-next-line: no-unused-expression
            throws(() => { new ApiCallConfiguration(1, chart, { v1: "value" }); });
        });

        test("Should do nothing if all variables are set", () => {
            let chart: IChart = { ...Chart };
            chart.Variables = ["v1", "v2"];
            // tslint:disable-next-line: no-unused-expression
            new ApiCallConfiguration(1, chart, { v1: "value", v2: "value" });
        });
    });

    suite("constructApiUrl", () => {
        test("Should return same url if there are no variables", () => {
            let chart: IChart = { ...Chart };
            chart.ApiUri = new ApiUri("www.test.de");

            let aPC: ApiCallConfiguration = new ApiCallConfiguration(1, chart, null);

            equal(aPC.ApiUri, "www.test.de");
        });


        test("Should return uri with variable replaced", () => {
            let chart: IChart = { ...Chart };
            chart.ApiUri = new ApiUri("www.test.de/{var1}");
            chart.Variables = ["var1"];

            let aPC: ApiCallConfiguration = new ApiCallConfiguration(1, chart, { var1: "val1" });

            equal(aPC.ApiUri, "www.test.de/val1");
        });


        test("Should return uri with variables replaced", () => {
            let chart: IChart = { ...Chart };
            chart.ApiUri = new ApiUri("www.test.de/{var1}/{var2}");
            chart.Variables = ["var1", "var2"];

            let aPC: ApiCallConfiguration = new ApiCallConfiguration(1, chart, { var1: "val1", var2: "val2" });

            equal(aPC.ApiUri, "www.test.de/val1/val2");
        });


        test("Should return uri with the same variable replaced twice", () => {
            let chart: IChart = { ...Chart };
            chart.ApiUri = new ApiUri("www.test.de/{var1}/{var1}");
            chart.Variables = ["var1"];

            let aPC: ApiCallConfiguration = new ApiCallConfiguration(1, chart, { var1: "val1" });

            equal(aPC.ApiUri, "www.test.de/val1/val1");
        });
    });
});