import React from 'react';

const MovieList = (props) => {
     

    const changeid = (event) =>{
		  props.setanimeid(event.target.id)
		  props.setView(false)
	}


	return (
		<>
			{props.movies.filter((val) =>{
				if(props.searchValue === ""){
					return val
				} 
				else if (val.title.toLowerCase().includes(props.searchValue.toLowerCase())){
                    return val
				}
			}).map((movie) => (
				
				<div  key={movie.id} className='image-container d-flex justify-content m-3'>
					<img id={movie.id} onClick={changeid} style={{maxHeight:'400px' , marginLeft:'30px'}} src={movie.image} alt='movie'></img>
					<div 
		
						className='overlay d-flex align-items-center justify-content-center'
					>
				         {movie.title}  : {movie.release_date}
					</div>
				</div>
				
			))}
		</>
	);
};

export default MovieList;
