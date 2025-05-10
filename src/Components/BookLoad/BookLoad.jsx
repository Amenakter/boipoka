import { Link } from "react-router-dom";

export default function BookLoad({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="bg-gray-200 p-8">
          <img src={image} className="h-[166px]" alt="book" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-green-100 p-4 rounded-full font-semibold text-green-700"
              >
                {tag}
              </div>
            ))}
          </div>
          <Link to={`/book/${bookId}`}>
            <h2 className="card-title font-serif text-sm">{bookName}</h2>
          </Link>
          <div className="mt-2 mb-2">By: {author}</div>
          <div className="">Number of pages: {totalPages}</div>
          <div className="">Publisher year: {yearOfPublishing}</div>
          <div className="border-t-2 border-dotted mt-2 mb-2"></div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="card-actions justify-between items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="5 star"
                />
              </div>
              <div className="">{rating}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
