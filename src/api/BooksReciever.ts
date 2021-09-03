import googleApiHandler from './GoogleApiHandler'

interface BooksAdapter {
    getBooks: (params: Object) => Promise<any>
}

class BooksReciever implements BooksAdapter {
    public getBooks(params: Object): Promise<any> {
        return googleApiHandler.retrieve(params)
    }
}

const booksReciever = new BooksReciever();
export default booksReciever;