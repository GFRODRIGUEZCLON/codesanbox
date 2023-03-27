import React from "react";

function Profile({ name }) {
  return (
    <section>
      <img
        src="https://edurank.org/assets/img/alumni/katherine-johnson.jpg"
        alt={name}
      />
      <h4>{name}</h4>
      <p align="justify">
        {name} was an American mathematician whose calculations of
        orbital mechanics as a NASA employee were critical to the success of the
        first and subsequent U.S. crewed spaceflights. During her 33-year career
        at NASA and its predecessor, she earned a reputation for mastering
        complex manual calculations and helped pioneer the use of computers to
        perform the tasks. The space agency noted her "historical role as one of
        the first African-American women to work as a NASA scientist".
      </p>
    </section>
  );
}

export default function Gallery() {
  let name = "Katherine Johnson";
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile name={name} />
    </section>
  );
}
