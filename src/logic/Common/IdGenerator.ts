import { IIdentifiable } from "../Interfaces/IIdentifiable";



export class IdGenerator {
    public static GenerateId(list: IIdentifiable[]): number {
        list.sort((a: IIdentifiable, b: IIdentifiable) => {
            return a.Id - b.Id;
        });
        for (let i: number = 0; i < list.length; i++) {
            if (i !== list[i].Id) {
                return i;
            }
        }
        return list.length;
    }
}