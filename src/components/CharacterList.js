import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import {Container, Row} from "reactstrap"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState("");
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response=>{
        //console.log(response.data.results);
        setChars(response.data.results)
      })
      .catch(error=>{
        console.log("Something went wrong -->", error);
      });
  }, []);

  return (
    <Container className="character-list">
      <Row>
        {Object.values(chars).map((char, i)=>{
          //console.log(char);
          return <CharacterCard key={char.id} image={char.image} name={char.name} status={char.status} species={char.species} gender={char.gender}/>
        })}
      </Row>
    </Container>
  );
}
