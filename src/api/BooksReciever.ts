import googleApiHandler from './GoogleApiHandler'

interface Adapter {
    getBooks: (params: Object) => Promise<any>
}

class BooksReciever implements Adapter {
    getBooks(params: Object): Promise<any> {
        return googleApiHandler.retrieve(params)
    }
}

const booksReciever = new BooksReciever();
export default booksReciever;