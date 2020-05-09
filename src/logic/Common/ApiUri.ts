
export class ApiUri {
    public Domain: string;
    public FaviconUrl: string;

    constructor(public FullUrl: string) {
        this.Domain = this.getDomain();
        this.FaviconUrl = this.getFaviconUrl();
    }

    private getDomain(): string {
        return this.FullUrl.substr(0, this.FullUrl.indexOf("/"));
    }
    private getFaviconUrl(): string {
        return this.FaviconUrl = this.Domain + "favicon.icon";
    }
}
