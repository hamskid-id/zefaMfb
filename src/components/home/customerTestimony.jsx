import Slider from "react-slick";
import { Text } from "../text"

export const CustomerTestimoy =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
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
            className="lg:w-[70%] xl:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] m-auto py-14">
            <div className="flex flex-col justify-center items-center mb-8">
                <Text
                    style="text-black lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-center font-semibold text-primary mb-2"
                    value="Testimonials From Some of Our Customers"
                />
            </div>
            <div>
                <Slider {...settings}>
                    {
                        [
                            {
                                img:'https://zefamfb.com/images/wasiu.png',
                                work:"Business Loan",
                                info:"Zefa Microfinance Bank has supported my business with BSS loan, I appreciate the simplicity of their loan process and turn around time. honestly, Zefa is the best. ",
                                name:" Wasiu Fatimoh"
                            },{
                                img:"https://zefamfb.com/images/abass.png",
                                work:"Savings and Loans",
                                info:"Zefa has had a positive impact on my revenues and savings.They avail me with timely and adequate working capital. Theyhelp keep my business going. ",
                                name:"Abass akeem"
                            },{
                                img:"https://zefamfb.com/images/modupe.png",
                                work:"Investments",
                                info:" With Zefa Esusu loan, I am able to increase my stocks from a hundred thousand Naira value to almost a million. Kudos to Zefa, they are the best. ",
                                name:"Osayande Modupe"
                            },{
                                img:"https://zefamfb.com/images/bola.png",
                                work:"Savings",
                                info:"I am a regular saver at Zefa mfb. I have access to my money whenever I need it. Zefa has finally brought banking to my doorstep. ",
                                name:"Akinwumi Bola"
                            },{
                                img:"https://zefamfb.com/images/chibuike.png",
                                work:"Customer Services",
                                info:"I am impressed with Zefa staff’s transparency and courteous manners towards clients.",
                                name:"Chibuike Ebere"
                            }
                        ]?.map((review,index)=>{
                            const{
                                img,work,info,name
                            }=review
                            return(
                                <div     
                                    key={index}
                                    className="lg:px-14 xl:px-14 md:px-14 sm:px-2 xs:px-2"
                                >
                                    <div className="relative">
                                    <img
                                        src={img}
                                        alt="object not found"
                                        className="w-full h-[30rem] rounded-t-md"   
                                    />
                                    <div className="caption absolute bottom-[1rem] left-[1rem] right-[1rem] flex flex-col justify-center items-center p-2">
                                        <Text
                                            style="text-lg text-green text-center mb-2 font-semibold"
                                            value={work}
                                        />
                                        <Text
                                            style="text-lg text-black text-center"
                                            value={info}
                                        />
                                        <Text
                                            style="text-lg font-semibold text-center text-black font-semibold"
                                            value={name}
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