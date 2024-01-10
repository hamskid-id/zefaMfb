import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';



export const OpenAccountDropdown =()=>{
    const title ="personal";
    const items = [
        {
          key: '1',
          label: (
            <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to={`/open_account/${title}`}>Online Account Opening</Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/account_type">Account types</Link>
          ),
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
                className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm text-black "
            >
            Open Account
            </a>
        </Dropdown> 
    )
}