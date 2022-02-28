import React, {useState} from 'react'

export const AddCategory = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState ( 'Hola mundo');
  
    const handelInputChange = (e) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setCategories( cats => [...cats + inputValue] );
    }

    return (
    <form onSubmit = {handleSubmit} >
        <input 
            type="text"
            value = { inputValue }
            onChange = { handelInputChange }
        />
    </form>
  )
}
