import React from 'react';

function App() {

  const [books, setBooks] = React.useState([]);

  const getAddress = (parameter: string): string => {

    return `https://www.googleapis.com/books/v1/volumes?q=${parameter}&key=AIzaSyCBVroRsJ0yUbiLU8r2pT4dzRdt6oFbUOw`
  }

  React.useEffect(
    () => {

      fetch(getAddress('horror'))
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
