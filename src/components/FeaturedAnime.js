import React, { useState , useEffect} from 'react';
import './Featured.css'

const FeaturedAnime = (props) => {

     const [MovieDetails , setMovieDetails] = useState([])
     const [searchValue] = useState('');

    const getMovieDetails = async () => {
		const url = `https://ghibliapi.herokuapp.com/films/${props.id}`;

		const response = await fetch(url);
		const responseJson = await response.json();
         setMovieDetails(responseJson);

		
	};
    useEffect(() => {
		getMovieDetails();
	}, [searchValue]);
	




	return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${MovieDetails.movie_banner})`
        }}>
            {/* <button style={{backgroundColor:'red'}} className="featured--watchbutton">BACK</button> */}
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {MovieDetails.title} ({MovieDetails.original_title})
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{MovieDetails.release_date}</div>
                        <div className="featured--year">Director : {MovieDetails.director}</div>
                        <div className="featured--seasons">Producer: {MovieDetails.producer} </div>
                    </div>
                    <div className="featured--description">{MovieDetails.description}</div>
                    <div className="featured--genres"><strong>Time:</strong> {MovieDetails.running_time} min  ||  <strong>Score:</strong> {MovieDetails.rt_score}</div>
                   
                    <div className="featured--buttons">
                        <button onClick={() => props.setView(true)}  className="featured--watchbutton"> Back</button>
                        
                    </div>
                    
                </div>
            </div>
        </section>
	);
};

export default FeaturedAnime;
