import { useEffect, useState } from "react";
import BookLoad from "../BookLoad/BookLoad";

export default function Book() {
  const [books, setvBook] = useState([]);

  console.log(books);

  useEffect(() => {
    fetch("./BookData.json")
      .then((res) => res.json())
      .then((data) => setvBook(data));
  }, []);

  return (
    <div className="mt-30 mb-30">
      <h2 className="text-4xl font-serif text-center">Book</h2>
      <div className="grid grid-cols-3 gap-16 mt-8">
        {books.map((book) => (
          <BookLoad book={book} key={book.bookId}></BookLoad>
        ))}
      </div>
    </div>
  );
}
