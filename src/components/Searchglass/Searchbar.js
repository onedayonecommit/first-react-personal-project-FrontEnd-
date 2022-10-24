import React from 'react'
import { Link } from 'react-router-dom';
import css from './Searchbar.css'
const Searchbar = () => {
    return (
        <div className='box'>
            <input type="text" className="input" name="txt" placeholder='검색' onKeyUp={(e) => {
                e.key == "Enter" ? console.log(e.target.value) : console.log('nono')
            }} />
        </div>
    )
}

export default Searchbar

