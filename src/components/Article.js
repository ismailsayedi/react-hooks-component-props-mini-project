import React from "react";
import ReadTime from "./ReadTime";


function Article({ title, date, preview ,minutes}) {
  const defaultDate = "January 1, 1970";
  const minutesToRead = minutes || 0 ;


  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <ReadTime minutes={minutesToRead} />  

      
    </article>
  );
}

export default Article;
