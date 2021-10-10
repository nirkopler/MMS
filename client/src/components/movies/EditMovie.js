import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useGlobalState from '../GlobalState';
import { useParams } from 'react-router';

const EditMovie = () => {
    const { movieId } = useParams();
    const [moviesData, setMoviesData] = useGlobalState('moviesData')
    const [editMovieData, setEditMovieData] = useState({
        name: null,
        geners: null,
        year_premiered: null,
        image: null
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const editedMovie = await axios.put(`http://localhost:8000/api/movies/${movieId}`, editMovieData)
            console.log( `movie ${editedMovie.data.name} edited!`)
        } catch(err) {
            alert('server error try later')
            console.error(err);
        }
    }

    useEffect(() => {
        const getMovieData = async() => {
            const movieData = await axios.get(`http://localhost:8000/api/movies/${movieId}`);
            setEditMovieData(movieData.data)
        }

        getMovieData();
    }, [])

    return (
        <div>
            <h1>Edit Movie - {movieId}</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                
                <span>Name: </span>
                <input type='text' value={editMovieData.name} placeholder='name' onChange={(e) => setEditMovieData({...editMovieData, name: e.target.value})} />

                <span>Geners: </span>
                <input type='text' value={editMovieData.geners} placeholder='geners' onChange={(e) => setEditMovieData({...editMovieData, geners: e.target.value.split(',')})} />

                <span>Year: </span>
                <input type='text' value={editMovieData.year_premiered} placeholder='year_premiered' onChange={(e) => setEditMovieData({...editMovieData, year_premiered: e.target.value})} />

                <span>Image: </span>
                <input type='text' value={editMovieData.image} placeholder='image' onChange={(e) => setEditMovieData({...editMovieData, image: e.target.value})} />

                <input type='submit' value='Edit Movie' />
            </form>
        </div>
    )
}

export default EditMovie