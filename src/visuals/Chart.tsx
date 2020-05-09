
import { IChart } from "../logic/Interfaces/IChart";

export default (props: IChart) => {
    return (
        <div>
            <div>{props.Url.FaviconUrl}</div>
            <div>{props.Url.Domain}</div>
            <div>{props.Description}</div>
        </div>
    );
};
