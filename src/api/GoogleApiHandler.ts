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
    private paramString(parameters: any): string {
        let params = '';
        for(let key in parameters) {
            const param = `&${key}=${parameters[key]}`;
            params += param;
        }
        return params;
    }

    private createMainLink(): string {
        return `${this.mainLink}?key=${this.apiKey}`
    }
  
    public retrieve(parameters: any): Promise<any> {
        return fetch(this.createMainLink() + this.paramString(parameters))
    }

}
const googleApiHandler = new GoogleApiHandler(MAIN_LINK, API_KEY);
export default googleApiHandler;