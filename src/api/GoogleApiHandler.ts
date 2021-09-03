const MAIN_LINK = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyCBVroRsJ0yUbiLU8r2pT4dzRdt6oFbUOw'; // перенести

interface GoogleApiInt {
    retrieve: (params: any) => Promise<any>
}

class GoogleApiHandler implements GoogleApiInt {
    private mainLink: string;
    private apiKey: string;
    constructor(mainLink: string, apiKey: string) {
        this.mainLink = mainLink;
        this.apiKey = apiKey;
    }
    private buildParamString(parameters: any): string {
        let params = '';
        for(let key in parameters) {
            const param = `&${key}=${parameters[key]}`;
            params += param;
        }
        return params;
    }

    private getMainLinkWithApiCode(): string {
        return `${this.mainLink}?key=${this.apiKey}`
    }
  
    public retrieve(parameters: any): Promise<any> {
        return fetch(this.getMainLinkWithApiCode() + this.buildParamString(parameters))
    }

}
const googleApiHandler = new GoogleApiHandler(MAIN_LINK, API_KEY);
export default googleApiHandler;