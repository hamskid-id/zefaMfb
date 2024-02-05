import Slider from "react-slick";
import { Banner } from "./banner";

export const HomeSlideBanner =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div>
                <Slider {...settings}>
                    {
                        [
                            {
                                img:'https://zefa.vercel.app/images/slider-img-3.png',
                                title:"We support your dreams",
                                subTitle:"No matter who you are"
                            },{
                                img:"https://zefa.vercel.app/images/slider-img-2.png",
                                title:"We support your dreams",
                                subTitle:"No matter who you are"
                            }
                        ]?.map((review,index)=>{
                            const{
                                img,title,subTitle
                            }=review
                            return(
                                <Banner
                                    key={index}
                                    img={img}
                                    title={title}
                                    subTitle={subTitle}
                                />
                            )
                        })
                    }
                </Slider>
            </div>
    )
}