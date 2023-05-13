import { useState } from "react";
import axios from "axios"


const EjercicioPage = () => {
  const [exUsers, setExUsers]= useState ([])
  // usar metodo get de axios
  const getExUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(resp.data)
    setExUsers(resp.data)
  }

  return (
    <>
    <header className="row">
        <article className="col">
        <h1>Ejercicio</h1>
        </article>
    </header>
    <main className="row">
        <article className="col">
        <button type="button" className="btn btn-primary" onClick={getExUsers}>Get Ex Users</button>
        </article>
    </main>
    <section className="row">
        <article className="col">            
        <ul className="list-group">
            {
                exUsers.map((customer) => ( 
            <li key={customer.id} className="list-group-item">{customer.id} {customer.title} </li>
                ))
            }
        </ul>
        </article>
    </section>
    </>
  )
}

export default EjercicioPage

