import React, {useState, useEffect} from "react";
import Cards from "../../components/Cards";
import Header from '../../components/Header';
import Search from "../../components/Search";
import Pagination from '../../components/Pagination';
import { getMovies, searchMovies } from '../../services/api';


const Home = () => { 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(null);
  const [text, setText] = useState('');
  const limit = 20;

  useEffect(() => {
    if (text) {
      try{
        searchMovies(text, page)
          .then(data => {
            setMovies(data.results);
            setTotalItems(data.total_results);
          });
      }catch(error){
        console.log(error)
      }
    } else {
        try{
          getMovies(page)
            .then(data => {
              setMovies(data.results);
              setTotalItems(data.total_results);
            });
        }catch(error){
          console.log(error)
        }
    }
  }, [page, text]);

  function handlePageChange(page) {
    setPage(page);
  }

  function handleSearch(query) {
    setText(query);
    setPage(1);
  }

  return (
    <div className="container-home" >
      <Header title="Movie Search" />
      <Search value={text}  onChange={handleSearch} />
      <Cards movies={movies} title={text ? `"${text}"` : 'Popular Movies'} /> 
      {totalItems > limit &&
        <Pagination
            limit={limit}
            total={totalItems}
            currentPage={page}
            onPageChange={handlePageChange}
        />
      }
    </div>
  );
}

export default Home;