import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';


export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/books?author=${params.authorId}`)
    const books = await response.json()
    console.log(books)
    return {books};
  }

function Books(){
    const {books} = useLoaderData()
    
  return (
  <main>
     <section className="books-list">
               <div className='bookList-section'>
               {books.map(book => (
                    <article key={book._id} className="book-card">
                        <Link to={`/book/${book._id}`}>
                        <img src={book.image} alt={book.name} />
                        </Link>
                       
                        <div className="book-details">
                            <h2>{book.name}</h2>
                            <h3>{book.authorName}</h3>
                         
                        </div>
                    </article>
                ))}
               </div>
            </section>
  </main>
  )
}

export default Books
