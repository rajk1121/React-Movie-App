import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import PropTypes from 'prop-types';
import Likes from "./Likes";
import Button from './Button';
import paginate from '../utilities/pagination';
import ListGroup from './ListGroup';
import Navbar from './Navbar';
import Pagination from './paginate';
class Movies extends Component {
    state = {
        movies: getMovies(),
        selectedGenre: { name: "All Genres" },
        pageSize: 4,
        genres: [{ name: "All Genres" }, ...getGenres()],
        currentPage: 1,
        search: ''


    };


    handleClick = (movie) => {
        let clonedArray = [...this.state.movies];
        let index = clonedArray.indexOf(movie);
        clonedArray[index]['liked'] = !clonedArray[index]['liked'];
        this.setState({ movies: clonedArray });

    }
    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({ search: e.target.value });
    }
    handlePagechange = (page) => {
        this.setState({ currentPage: page })
    }
    handleGenreChange = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }
    handleDelete = (movie) => {
        let clonedArray = [...this.state.movies];
        let index = clonedArray.indexOf(movie);
        let id = clonedArray[index]['_id'];
        clonedArray = clonedArray.filter((mov) => {
            if (mov['_id'] !== id) {
                return true;
            }
            else {
                return false;
            }
        })
        let length = clonedArray.length;
        let noOfpages = Math.ceil(length / this.state.pageSize);
        // console.log(noOfpages )
        if (this.state.currentPage === noOfpages + 1) {
            this.setState({ movies: clonedArray, currentPage: noOfpages })
            console.log(this.state)
        }
        else {

            this.setState({ movies: clonedArray });
        }

    }
    render() {
        let filtered = this.state.selectedGenre && this.state.selectedGenre._id ? this.state.movies.filter((movie) => {
            return movie.genre.name === this.state.selectedGenre.name;
        }) : this.state.movies;
        // console.log(filtered)
        // console.log(this.state.selectedGenre)
        let squery = this.state.search;
        let sarr = filtered.filter((movie) => {
            return movie.title.startsWith(squery)
        })
        let arr = paginate(sarr, this.state.pageSize, this.state.currentPage);

        let movieTable = arr.map((property, i) => {
            return (<tr key={i}>
                <td style={{ padding: "15px" }}> {property.title}</td>
                <td style={{ padding: "15px" }}>{property.numberInStock}</td>
                <td style={{ padding: "15px" }} >{property.dailyRentalRate}</td>
                <td style={{ padding: "15px" }} >{property.genre.name}</td>
                <td style={{ padding: "15px" }} >
                    <Likes onClick={() => {
                        this.handleClick(property)
                    }

                    }
                        likes={property.liked} />
                </td>
                <td style={{ padding: "15px" }}>
                    <Button onClick={() => {
                        this.handleDelete(property)
                    }}>Delete</Button>
                </td>

            </tr>)
        })
        return (
            <div>
                <input style={{margin: '15px'}} placeholder={"Search"} type="text" value={this.state.search} onChange={this.handleSearch} />

                {/* {console.log(arr)}
                {console.log(movieTable)} */}
                {/* <Navbar /> */}
                <ListGroup
                    items={this.state.genres}
                    textProperty="name"
                    valueProperty="_id"
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreChange}
                />
                <table>
                    <thead>
                        <tr>
                            <td style={{ padding: "15px" }}>Title</td>
                            <td style={{ padding: "15px" }}>Stocks</td>
                            <td style={{ padding: "15px" }} > Rental Rate</td>
                            <td style={{ padding: "15px" }}>Genre</td>
                            <td style={{ padding: "15px" }}>Like</td>
                            <td style={{ padding: "15px" }}>Button</td>
                        </tr>
                    </thead>
                    <tbody>
                        {movieTable}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={filtered.length}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePagechange}
                    pageSize={this.state.pageSize}
                />
            </div>
        );
    }
}

export default Movies;