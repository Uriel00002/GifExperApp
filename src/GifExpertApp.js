import  react, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
 import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = [ 'One Punch Man', 'Dragon Ball', 'Sword Art Online'  ];
    const [categories, setCategories] = useState ( [ 'One Punch Man', 'Dragon Ball', 'Sword Art Online'  ]);

    //const handleAdd = () => {
     //       setCategories( cats => [...categories + 'Attak on Titan'] );
    //}

    const [categorias, setCategorias]= useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />


            <ol>
                {
                    categories.map(category => {
                        return<li key={category}>  {category} </li>
                    })
                }
            </ol>

        </>
    )
}

