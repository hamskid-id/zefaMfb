import Slider from "react-slick";
import { Text } from "../text"

export const TeamSlide=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
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
        <div 
            className="lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2">
            <div>
                <Slider {...settings}>
                    {
                        [
                            {
                                img:'https://zefa.vercel.app/images/md-2.png',
                                name:"Bayonle Sulaymon",
                                position:"(Managing Director)"
                            },{
                                img:"https://zefa.vercel.app/images/audit-2.png", 
                                name:"Mrs Dahunsi Arinola",
                                position:"(Manager, Internal Control & Audit)"
                            },{
                                img:"https://zefa.vercel.app/images/fin-ops.png",
                                name:"Oyewola Olushola",
                                position:"(Manager, Finance & Operation)"
                            },{
                                img:"https://zefa.vercel.app/images/biz-dev.png",
                                name:"Orenisile Mayowa",
                                position:"(Head, Business Developement & Credit)"
                            }
                        ]?.map((review,index)=>{
                            const{
                                img,name,position
                            }=review
                            return(
                                <div     
                                    key={index}
                                    className="p-2"
                                >
                                    <div className="relative team-card">
                                        <img
                                            src={img}
                                            alt="object not found"
                                            className="w-full h-[28rem] rounded-t-md"   
                                        />
                                        <div className="team-caption translate-text absolute bottom-[1rem] left-[1rem] right-[1rem] flex flex-col justify-center items-center p-2">
                                            <Text
                                                style="text-lg caption-p text-center mb-2 font-semibold"
                                                value={name}
                                            />
                                            <Text
                                                style="text-lg caption-p text-center font-semibold"
                                                value={position}
                                            />
                                        </div> 
                                    </div>  
                                </div>
                                    
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}