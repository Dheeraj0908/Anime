import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import FeaturedAnime from './components/FeaturedAnime';



const App = () => {
	const [movies, setMovies] = useState([]);
	const [animeid, setanimeid] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [View, setView] = useState(true);

	const getMovieRequest = async () => {
		const url = `https://ghibliapi.herokuapp.com/films`;

		const response = await fetch(url);
		const responseJson = await response.json();		
		setMovies(responseJson);
		
	};

	useEffect(() => {
		getMovieRequest();
	}, []);






	return (View?
			<div className='container-fluid movie-app'>
	<div className='row d-flex align-items-center mt-4 mb-4'>
		<MovieListHeading heading="Anime" />
		<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
	</div>
	
	<div className='row' >
	 
		<MovieList
			movies={movies}
			setanimeid={setanimeid}
			setView={setView}
			searchValue={searchValue}
		/>
	 
	</div>


 
</div>:<FeaturedAnime id={animeid} setView={setView} />
		
	
	);
};

export default App;
