import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:3000/authors')
    const authors =await response.json()
    return { authors };
  }

function Home()  {
    const {authors} = useLoaderData()
    return (

    <main>
    <section className='section-1'>
    <h2>Featured Authors</h2>
    <div className="authors-list">
                    {
                        authors.map(author => (
                            <article key={author._id} className="author-card">
                                <img src={author.image} alt={`Image of ${author.name}`} className="author-image" />
                                <div className="author-details">
                                    <span className="author-name">{author.name}</span>
                                    <span className="author-books">Books: {author.books}</span>
                                    <Link to={`/authors/${author._id}`} className="read-more-link">Read More</Link>
                                    <Link to={`/books/${author._id}`} className="view-books-link">View Books</Link>
                                </div>
                            </article>
                        ))
                    }
                </div>
    </section>
    </main>
)
}

export default Home
