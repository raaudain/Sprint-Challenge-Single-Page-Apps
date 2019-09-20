import React, { useState } from "react";

export default function SearchForm() {
  
  const [find, setFind] = useState({})

  function handleSearch(event){
    const newSearch = Object.freeze({text: event.target.value});
    setFind(newSearch);
  }

  function search(){
    const newSearch = Object.freeze({text: find.text})
    if(on)
  }

  return (
    <section className="search-form">
     
    </section>
  );
}
