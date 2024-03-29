import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';



export const AboutUsDropdown =()=>{
    const items = [
        {
          key:'1',
          label: (
            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/aboutUs">About Zefa</Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/aboutUs?tab=mission">Our mission</Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/aboutUs?tab=differentiators">Differentiator</Link>
          ),
        },
        {
          key: '4',
          label:(
            <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/aboutUs?tab=our_team">Our team</Link>
          )
        },
        {
            key: '5',
            label:(
              <Link className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-md xs:text-md lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/aboutUs?tab=our_core_values">Our core values</Link>
            )
          },
    ];

    return(
        <Dropdown
            menu={{
                items,
            }}
        > 
            <a 
                onClick={(e) => e.preventDefault()}
                className="lg:text-lg xl:text-lg md:text-lg my-2 sm:text-sm xs:text-sm lg:text-[#006837] xl:text-[#006837] sm:text-white md:text-[#006837] xs:text-white"
            >
            About Us
            </a>
        </Dropdown>
    )
}