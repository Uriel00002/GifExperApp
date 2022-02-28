import  react, {useState} from 'react'

export const GifExpertApp = () => {

    //const categories = [ 'One Punch Man', 'Dragon Ball', 'Sword Art Online'  ];
    const [categories, setCategories] = useState ( [ 'One Punch Man', 'Dragon Ball', 'Sword Art Online'  ]);

    const handleAdd = () => {
            setCategories( cats => [...categories + 'Attak on Titan'] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>agregar</button>

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

