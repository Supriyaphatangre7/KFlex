import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Slide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    const data = [
        {
            name: "simran",
            image: "lo1.jpg",
           
        },
        {
            name: "queen of tears",
            image: "n2.jpg",
            
        },
        {
            name: "true beauty",
            image: "my.jpg",
           
        },
        {
            name: "my demon",
            image: "my.jpg",
           
        },
        {
            name: "no gain no love",
            image: "n3.jpg",
          
        },
    ];

    return (
        <div className="w-4/5 m-auto">
            <div className="mt-20">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} className="bg-black h-[300px] text-white rounded-xl">
                        <div className="h-56   flex justify-center items-center">
                            <img src={d.image} alt={d.name} className="h-44 w-44 " />
                        </div>
                        <div className="flex flex-col  h-[20px] p-3 justify-center items-center ">
                            <p className="text-sm">{d.name}</p>
                           
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
};
