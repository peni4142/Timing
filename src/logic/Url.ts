
export class Url {
    public Domain: string;

    constructor(public FullUrl: string) {
        this.Domain = this.getDomain();
    }

    getDomain(): string {
        return this.FullUrl.substr(0, this.FullUrl.indexOf("/"));
    }
}
