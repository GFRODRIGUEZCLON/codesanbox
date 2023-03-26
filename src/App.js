import React from 'react'

function Profile({name}) 
{
  return (
    <img
      src="https://edurank.org/assets/img/alumni/katherine-johnson.jpg"
      alt={name}
    />
  );
}

function Title({name}) {
  return (
    <h4>
      {name}
    </h4>
  );
}

function Bio(){
  return(
  <p align="justify">
    Katherine Johnson was an American mathematician whose calculations of
    orbital mechanics as a NASA employee were critical to the success of the
    first and subsequent U.S. crewed spaceflights. During her 33-year career at
    NASA and its predecessor, she earned a reputation for mastering complex
    manual calculations and helped pioneer the use of computers to perform the
    tasks. The space agency noted her "historical role as one of the first
    African-American women to work as a NASA scientist".
  </p>
  );
}

export default function Gallery() {
  const name = "Katherine Johnson";
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile name={name} />
      <Title name={name} />
      <Bio />
    </section>
  );
}
