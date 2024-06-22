import React from 'react'
import { useLoaderData } from 'react-router-dom';


export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/authors/${params.authorId}`)
    const author = await response.json()
    return { author};
  }

  function Author() {
    const {author} = useLoaderData()

  return (
    <main>
        <section className='author-section'>
        <img className='author-image' src={author.image} alt="" />
        <div className='author-details'>
            <h2>{author.name}</h2>
            <p>{author.description}</p>
        </div>
        </section>

    </main>
  )
}

export default Author
