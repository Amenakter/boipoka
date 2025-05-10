import bannerImg from "../../assets/pngwing1.png";

export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen p-30">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold leading-14 font-serif">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary mt-8 bg-green-600 border-green-600">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
}
