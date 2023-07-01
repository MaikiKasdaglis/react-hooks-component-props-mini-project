import React from "react";


function Article ({name, date="January 1, 1970", preview}) {
    return (
        <article>
            <h3>{name}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}



export default Article