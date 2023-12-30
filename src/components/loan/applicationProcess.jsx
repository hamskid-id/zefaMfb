import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { Text } from '../text';

export const ApplicationProcess =()=>{
    const { token } = theme.useToken();
    const panelStyle = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
    const getItems = (panelStyle) => [
        {
          key: '1',
          label: 'Step 1: Choose the Loan Package of Interest',
          children: <p>Visit our  Loan Packages page to see which one best suits your needs.</p>,
          style: panelStyle,
        },
        {
          key: '2',
          label: 'Step 2: Complete the online Loan Application form',
          children: <p>Once you know which of our Loan Packages is right for your business or Personal needs, Kindly complete and submit the Online Application Form.</p>,
          style: panelStyle,
        },
        {
          key: '3',
          label: 'Step 3: We will assess your application',
          children: <p>Once we receive your completed online application a customer service staff will get in touch with you immediately. The staff will discuss your application in detail with you. You will be expected to provide additional information/documents necessary to process your application.</p>,
          style: panelStyle,
        },
        {
            key: '4',
            label: 'Step 4: We will make a credit decision',
            children: <p>Step 4: We will make a credit decision</p>,
            style: panelStyle,
          }
      ];
    return(
        <div className="lg:p-[8rem] xl:p-[8rem] md:p-[8rem] sm:p-4 xs:p-4 flex flex-col bg-green">
            <Text
                style="text-white font-semibold lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl xs:text-2xl mb-4"
                value="Our Application Process"
            />
            <Text
                style="text-white lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-4"
                value="Whatever the type of loan you require, It could be a startup loan to finance your dream business, or you require funds for your growing business or a Personal Loan. Zefa Microfinance Bank may be able to give you the financial support you need. The process is straight forward and is explained in detail here."
            />
            <Text
                style="text-white lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-4"
                value="Our team are always on hand to provide help to customers when applying for a loan."
            />
            <Text
                style="font-semibold text-white lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm mb-4"
                value="The following 4 steps are involved towards processing loan applications successfully with Zefa Microfinance Bank Limited."
            />
            <div>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{
                        background: token.colorBgContainer,
                        padding:"2rem"
                    }}
                    items={getItems(panelStyle)}
                />
            </div>
        </div>
    )
}