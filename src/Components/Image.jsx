import React from 'react'

function Image({id, url, title, author, location, category}) {
    return (
        <div key={id}>
            <img src={url} alt={title} className='rounded-3xl'/>
            {/* <p>Title: {title}</p>
            <p>Author: {author}</p>
            <p>Location: {location}</p>
            <p>Category: {category}</p> */}
        </div>
    )
}

export default Image;