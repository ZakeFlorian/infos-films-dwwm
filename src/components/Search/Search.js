//import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const form = e.target
    const formData = new FromData(form)
    console.log(formData)
    console.log(formData.get('search')) /* correspond au name de l’input */ 
  }

  return (
    <div className="search">
      <h2>{search}</h2>   {/* juste pour tester */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="idSearch">Votre recherche</label>
          <input id="idSearch" name="search" type="text" />
        </fieldset>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
}

export default Search