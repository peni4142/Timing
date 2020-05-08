import { Url } from "../logic/Url";
import { equal } from "assert";


suite("Url",()=>{
    test("Domain at www.deezer.com/flow should be www.deezer.com", ()=>{
        let url: Url = new Url("www.deezer.com/flow");

        equal(url.Domain, "www.deezer.com");
    });
});