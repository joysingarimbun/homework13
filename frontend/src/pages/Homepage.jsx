import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
import axios from "axios";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await axios.get("http://localhost:8000/books");
        setBooks(books.data);
      } catch (error) {
        window.alert("Something Wrong");
      }
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100vw">
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}
