import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from '../components/common/like'
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {

  state = { 
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    console.log(movies);
    this.setState({movies: movies});
  };

  handleLike = (movie) => {
    console.log("cliccckkked" , movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) {
      return <p>There are no movies in database.</p>
    }
    // otherwise create a new array of movies and paginate the data
    const movies = paginate(allMovies, currentPage, pageSize);

    return(
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Remove</th>
              <th>Like?</th>
            </tr>
          </thead>
          <tbody>
            { movies.map(movie => 
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
              </td>
              <td>
                <Like 
                  onClick={() => this.handleLike(movie)} 
                  liked={movie.liked} 
                />
              </td>
            </tr>
            )}
          </tbody>
        </table>
        <Pagination 
          itemsCount={count} 
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    )
  }
}

export default Movies;