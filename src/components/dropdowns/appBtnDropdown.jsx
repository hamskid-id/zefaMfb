import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Text } from '../text';



export const BtnDropdown =({type})=>{
    const items =[
        {
          key: '1',
          label: (
            <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/loan">Get started</Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/loan_package">Loan packages</Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link className="lg:text-md xl:text-md md:text-md my-2 sm:text-sm xs:text-sm lg:text-black xl:text-black md:text-black xs:text-white sm:text-white " to="/application_process">Loan Application Process</Link>
          ),
        }
    ];
    return(
      <>
        {
          type?(
            <Dropdown
                menu={{
                    items
                }}
            >
                <Text
                    style="text-sm text-black"
                    value="Apply for Loan"
                />
            </Dropdown>
          ):(
            <Dropdown
                menu={{
                    items
                }}
            >
                <button
                    className="lg:w-auto xl:w-auto sm:w-full md:w-auto xs:w-full applyBtn text-white rounded-md py-2 px-4 text-md cursor"
                >
                    Apply for Loan
                </button>
            </Dropdown>
          )
        }
      </>
    )
}