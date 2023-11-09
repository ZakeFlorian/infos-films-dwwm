//import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {

   const navigate = useNavigate()
  
  //const [search, setSearch] = useState('')
  
//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   }

  const handleSubmit = (e) => {
    //alert('La recherche soumise : ' + search);
    e.preventDefault(); // obligatoire : arrêt de l'action par défaut
    // lecture des données à partir du formulaire
    const form = e.target;  // récupération du formulaire
    const formData = new FormData(form);    //création de l'objet FormData de javascript
    console.log(formData.get('search'));    // utilisation de la méthode get('nom de l'attribut name')
    navigate(`/List/${formData.get('search')}`)
  }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="idSearch">Votre recherche :</label>
                    <input id="idSearch" name="search" type="text" />
                </fieldset>
                <input type="submit" value="Rechercher" />
            </form>
        </div>
    );
}

export default Search