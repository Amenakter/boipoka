import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishList } from "../Utilities/LSD";

export default function BookDetails({ perams }) {
  const { bookId } = useParams(perams);

  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookName,
    author,
    image,
    review,
    publisher,
    tags,
    category,
    yearOfPublishing,
    rating,
    totalPages,
  } = book;

  const handleReadlist = (id) => {
    addToReadList(id);
    // console.log(id);
  };

  const handleWishList = (id) => {
    addToWishList(id);
    console.log(id);
  };

  return (
    <div className="flex flex-row items-center mt-20 mb-20">
      <div className="w-1/2 p-18 bg-gray-200 rounded-2xl">
        <figure className="">
          <img src={image} alt="Movie" className=" w-[425px] h=[574px] " />
        </figure>
      </div>
      <div className="card-body w-1/2">
        <h2 className="card-title">{bookName}</h2>
        <div className="flex flex-col">
          <p>By : {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>{review}</p>
          <div className="flex gap-5 items-center mt-8">
            Tag:{" "}
            {tags.map((tag, index) => (
              <button key={index} className="btn bg-green-200 text-green-600">
                {tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead></thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Number of Pages:</td>
                    <td className="font-bold">{totalPages}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Publisher:</td>
                    <td className="font-bold">{publisher}</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Year of Publishing:</td>
                    <td className="font-bold">{yearOfPublishing}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td className="font-bold">{rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-actions justify-start">
          <button
            onClick={() => handleReadlist(bookId)}
            className="btn bg-white text-black border-black"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn bg-sky-500 text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
