import { useLoaderData } from "react-router-dom";
import { getReadList, getWishList } from "../Utilities/LSD";
import { useEffect, useState } from "react";
import BookLoad from "../BookLoad/BookLoad";

export default function StoredBook() {
  const [book, setBook] = useState([]);
  const [sort, setSort] = useState();
  const [wishList, setWishList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const readlist = getReadList();
    const readListInt = readlist.map((id) => parseInt(id));

    const matchReadList = data.filter((book) =>
      readListInt.includes(book.bookId)
    );
    setBook(matchReadList);

    const totalWishListItem = getWishList();

    const totalWishListItemInt = totalWishListItem.map((id) => parseInt(id));

    const matchWishListItem = data.filter((WishBookList) =>
      totalWishListItemInt.includes(WishBookList.bookId)
    );
    setWishList(matchWishListItem);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Rating") {
      const sortRatinglist = [...book].sort((a, b) => b.rating - a.rating);
      setBook(sortRatinglist);
    }

    if (sortType === "Number of pages") {
      const sortedByPageList = [...book].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setBook(sortedByPageList);
    }
    if (sortType === "Publisher year") {
      const sortByYear = [...book].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setBook(sortByYear);
    }
  };

  return (
    <div className="my-16">
      <div className="dropdown my-8">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by ${sort}` : "sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSort("Number of pages")}>Number of pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Publisher year")}>Publisher year</a>
          </li>
        </ul>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Read Book
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Readlist: {book.length}
          {book.map((book) => (
            <BookLoad book={book} key={book.bookId}></BookLoad>
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          Wishlist
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          wishtListItem: {wishList.length}
          {wishList.map((book) => (
            <BookLoad book={book} key={book.bookId}></BookLoad>
          ))}
        </div>
      </div>
    </div>
  );
}
