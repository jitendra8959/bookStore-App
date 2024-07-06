import {useState, useEffect} from 'react'
import BookList from "../../components/BookList"
import CreateBookPage from "./CreateBookPage"
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../services/book/actions';
import { getAll } from '../../stores/book/bookSlice';


export default function Home() {

  const dispatch = useDispatch();

  const [localParams, setLocalParams] = useState({
    page: 1,
    limit: 25,
    search: "",
    filter: "",
    date: "",
    order_by: "asc",
    order_by_column: "name",
})

const getBooks = async() => {
  const res = await getAllBooks(localParams);
  dispatch(getAll(res));
}
const results  = useSelector((state) => state.book.results);
const resultsCount  = useSelector((state) => state.book.resultsCount);

useEffect(() => {
  getBooks();
}, []);

  return (
    <div>
      {/* <h1>Bookstore</h1> */}
      <BookList results={results} resultsCount={resultsCount} />
      {/* <CreateBookPage /> */}
    </div>
  )
}
