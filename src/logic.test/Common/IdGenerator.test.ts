import { IIdentifiable } from "../../logic/Interfaces/IIdentifiable";
import { IdGenerator } from "../../logic/Common/IdGenerator";
import { equal } from "assert";

suite("IdGenerator", () => {

    test("GenerateId should return next greater Id on perfect list", () => {
        let list: IIdentifiable[] = [];
        for (let i: number = 0; i < 3; i++) {
            list.push({ Id: i });
        }

        let actual: number = IdGenerator.GenerateId(list);

        equal(actual, 3);
    });


    test("GenerateId should return 0 when no Id has value of 0", () => {
        let list: IIdentifiable[] = [];
        for (let i: number = 0; i < 3; i++) {
            list.push({ Id: i });
        }

        let actual: number = IdGenerator.GenerateId(list);

        equal(actual, 3);
    });
});