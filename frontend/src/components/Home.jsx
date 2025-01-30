import { FaRegPlayCircle } from "react-icons/fa";
export const Home = () => {
  return (
    <>
      <div
        className="carousel-container"
        style={{ height: "600px", backgroundColor: "black" }}
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-full h-[90vh]"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Carousel indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel inner content */}
          <div className="carousel-inner h-full">
            {/* Slide 1 */}
            <div className="carousel-item active h-full relative">
              <img
                src="s1.jpg"
                className="d-block w-100 h-full object-cover"
                alt="Slide 1"
              />
              {/* Blurred overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
              {/* Left-middle Text overlay */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10 text-left text-white">
                <h2 className="text-5xl font-extrabold">Queen of Tears</h2>
                <p className="text-xl mt-4">
                  A heartwarming story of love, resilience, and unexpected twists
                  in the corporate world.
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center px-8 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    <span className="material-icons text-black mr-2"><FaRegPlayCircle /></span>
                    Play
                  </button>
                  <button className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-md hover:bg-gray-500 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item h-full relative">
              <img
                src="l3.jpg"
                className="d-block w-100 h-full object-cover"
                alt="Slide 2"
              />
              {/* Blurred overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
              {/* Left-middle Text overlay */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10 text-left text-white">
                <h2 className="text-5xl font-extrabold">Lovely Runner</h2>
                <p className="text-xl mt-4">
                  Follow the struggles of a powerful woman as she navigates life’s
                  most difficult challenges.
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center px-8 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    <span className="material-icons text-black mr-2"><FaRegPlayCircle /></span>
                    Play
                  </button>
                  <button className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-md hover:bg-gray-500 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item h-full relative">
              <img
                src="s7.jpg"
                className="d-block w-100 h-full object-cover"
                alt="Slide 3"
              />
              {/* Blurred overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
              {/* Left-middle Text overlay */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10 text-left text-white">
                <h2 className="text-5xl font-extrabold">No Gain No Love</h2>
                <p className="text-xl mt-4">
                  Experience a tale of triumph and heartbreak in this must-watch
                  drama.
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center px-8 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    <span className="material-icons text-black mr-2 "><FaRegPlayCircle /></span>
                    Play
                  </button>
                  <button className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-md hover:bg-gray-500 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <div className="row gap-1">
            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 1</h5>
                  <p className="card-text text-white">Episodes: 12</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 2" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 2</h5>
                  <p className="card-text text-white">Episodes: 20</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 3" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 3</h5>
                  <p className="card-text text-white">Episodes: 18</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 4" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 4</h5>
                  <p className="card-text text-white">Episodes: 10</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            
          </div>

          {/* Additional Cards */}
          <div className="row gap-1">
            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 5" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 5</h5>
                  <p className="card-text text-white">Episodes: 15</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 6" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 6</h5>
                  <p className="card-text text-white">Episodes: 25</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 7" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 7</h5>
                  <p className="card-text text-white">Episodes: 22</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="s5.jpg" className="card-img-top" alt="Card 8" />
                <div className="card-body">
                  <h5 className="card-title text-white">KDrama Series 8</h5>
                  <p className="card-text text-white">Episodes: 30</p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
