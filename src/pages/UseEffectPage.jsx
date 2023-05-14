// un ejemplo para el use effect, sera cargar una pagina desde otra para no usar algun evento
// con arreglo de dependencias vacio

import { useState, useEffect } from "react"
import axios from "axios"

const UseEffectPage = () => {
    const [books, setBooks] = useState ([]);

const getBooks = async () => {
    const resp = await axios.get("https://fakerapi.it/api/v1/books");
    console.log(resp.data)
    setBooks(resp.data.data);

}

useEffect(() => {
    getBooks();
  }, []);


  return (
    <>
        <header className="row">
        <article className="col">
        <h1>Use Effect Page</h1>
        </article>
    </header>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div key={book.id} className="col">
            <div className="card h-100 text-bg-dark mb-3">
              <img src={book.image} className="card-img-side" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default UseEffectPage

