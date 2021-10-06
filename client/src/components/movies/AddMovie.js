import React, {useState} from 'react';
import axios from 'axios';

const AddMovie = () => {
    const [addMovieData, setAddMovieData] = useState({
        name: null,
        geners: null,
        year_premiered: null,
        image: null
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/movies', addMovieData)
        console.log( `movie ${addMovieData.name} added!`)
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                
                <span>Name: </span>
                <input type='text' placeholder='name' onChange={(e) => setAddMovieData({...addMovieData, name: e.target.value})} />

                <span>Geners: </span>
                <input type='text' placeholder='geners' onChange={(e) => setAddMovieData({...addMovieData, geners: e.target.value.split(',')})} />

                <span>Year: </span>
                <input type='text' placeholder='year_premiered' onChange={(e) => setAddMovieData({...addMovieData, year_premiered: e.target.value})} />

                <span>Image: </span>
                <input type='text' placeholder='image' onChange={(e) => setAddMovieData({...addMovieData, image: e.target.value})} />

                <input type='submit' value='Add Movie' />
            </form>
        </div>
    )
}

export default AddMovie