import { FaRegPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const data = [
    { name: "Squid Game", image: "sq.jpg" },
    { name: "My Dearest Enemy", image: "mo.jpg" },
    { name: "True Beauty", image: "my.jpg" },
    { name: "My Demon", image: "my.jpg" },
    { name: "No Gain No Love", image: "n3.jpg" }
  ];

  return (
    <>
      <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide w-full h-[90vh]" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner h-full">
            {/* Repeat this block for each slide */}
            <div className="carousel-item active h-full relative">
              <img src="s1.jpg" className="d-block w-100 h-full object-cover" alt="Slide 1" />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10 text-left text-white">
                <h2 className="text-5xl font-extrabold">Queen of Tears</h2>
                <p className="text-xl mt-4">A heartwarming story of love, resilience, and unexpected twists in the corporate world.</p>
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center px-8 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    <FaRegPlayCircle className="mr-2" /> Play
                  </button>
                  <button className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-md hover:bg-gray-500 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>
            {/* Add other slides here */}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h4 className="underline text-lg font-bold">Latest Release</h4>
      <div className="container mt-6">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={d.image} className="card-img-top" alt="Slide" />
                <div className="card-body">
                  <center><p>{d.name}</p></center>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <h4 className="underline text-lg font-bold">Trending Shows</h4>
      <div className="container mt-6">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={d.image} className="card-img-top" alt="Slide" />
                <div className="card-body">
                  <center><p>{d.name}</p></center>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Repeat for other sections: Trending Shows, Hot Release, etc. */}
    </>
  );
};
