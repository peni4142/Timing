import { ITime } from "../Interfaces/ITime";
import { Weekday } from "./Weekday";


export class Timing {

    constructor(public readonly Id: number, public Name: string,
        private time: ITime, private weekdays: Weekday[] = [],
        public ApiCallConfigurationIdsToCall: number[]) { }


    public SetTime(time: ITime): void {
        this.time = time;
    }
    public SetWeekdays(weekdays: Weekday[]): void {
        this.weekdays = weekdays;
    }
}