import React from 'react'
import { useLoaderData } from 'react-router-dom';


export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/books/${params.bookId}`)
    const book = await response.json()
    return {book};
  }

function Book(){
    const {book} = useLoaderData()
  return (
   <main>
    <section className='book-section'>
        <img src={book.image} alt="" />
        <div className='details'>
        <h2>{book.name}</h2>
        <h3>{book.authorName}</h3>
        <p>{book.description}</p>
        <span>&#8377;{book.price}</span>
        <button>Buy Now</button>
        </div>
    </section>
   </main>
  )
}

export default Book;
