import { ApiUri } from "../../logic/Common/ApiUri";
import { equal } from "assert";


suite("Url", () => {
    // deezer://www.deezer.com/album/10596327?autoplay=true
    test("Domain at www.deezer.com/flow should be www.deezer.com", () => {
        let url: ApiUri = new ApiUri("www.deezer.com/flow");

        equal(url.Domain, "www.deezer.com");
    });
});