import React, {useState, useEffect} from "React";
import axios from "axios";

const Character = (props) =>{
const [char, setChar] = useState();
  console.log(props)
  
  useEffect(() =>{
    //const id = props;
    

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response =>{
        //console.log(response.data.results);
        setChar(response.data.results)
      })
  },[])
}

export default Character;