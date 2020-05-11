
import { IChart } from "../logic/Interfaces/IChart";

export default (props: IChart) => {
    return (
        <div>
            <div>{props.ApiUri.FaviconUrl}</div>
            <div>{props.ApiUri.Domain}</div>
            <div>{props.Description}</div>
        </div>
    );
};
