import React from 'react'

function MovieCard(props) {
    return (
        <div>
           <div className="card-list">
                {props.movies.filter(movie => movie.poster_path).filter(movie => movie.overview).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' posts'}></img> 
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>

                            <p>RELEASE DATE: {movie.release_date}</p>
                            <p>RATING: <i className="material-icons">star_rate</i> {movie.vote_average}/10 </p>
                            <p className="card--description">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default MovieCard
