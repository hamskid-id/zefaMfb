import Slider from "react-slick";
import { Text } from "../text"

export const HomeCustomerTestimony =()=>{
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
            className="lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2 bg-whitesmoke">
            <div className="flex flex-col justify-center items-center mb-8">
                <Text
                    style="c-brown lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-start font-semibold"
                    value="Words From Customers"
                />
                <Text
                    style="c-brown lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl text-start font-semibold text-primary mb-2"
                    value="Testimonial"
                />
                <div className="bg-olive w-[4rem] h-[0.2rem]"></div>
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
                                    className="p-4"
                                >
                                    
                                    <Text
                                        style="text-md font-semibold text-start text-black font-semibold mb-4"
                                        value={name}
                                    />
                                    <div className="home-testimony-card rounded-br-2xl bg-[#006837] flex flex-col justify-start items-start p-8 h-[14rem]">
                                        <Text
                                            style="text-md text-white text-start mb-4 font-semibold"
                                            value={work}
                                        />
                                        <Text
                                            style="text-md text-white text-start"
                                            value={info}
                                        />
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