import { Link, useNavigate } from "react-router-dom"
import { Text } from "../text"

export const LoanPackage =()=>{
    const navigate = useNavigate();
    return(
        <div className="lg:p-[9rem] xl:p-[9rem] md:p-[9rem] sm:p-4 xs:p-4 flex flex-col bg-green">
            <Text
                style="font-semibold lg:text-4xl xl:text-4xl md:text-4xl sm:text-2xl sm:text-2xl text-start text-white mb-4"
                value="Loan Packages"
            />
            <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                <Text
                    style="font-semibold lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl sm:text-xl text-start text-green mb-4"
                    value="Consumer Loans (Personal Loan)"
                />
                <ul className="list-disc leading-10">
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Pay Day (Salary Advance)</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Asset Acquisition</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">School fees</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">No hidden costs</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">Payments on reducing balance</li>
                </ul>
                <button 
                    onClick={()=>navigate("/loan")}
                    className="bg-green text-white rounded-md py-4 px-8 mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Get Started</button>
            </div>
            <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                <Text
                    style="font-semibold lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl sm:text-xl text-start text-green mb-4"
                    value="Consumer Loans (Personal Loan)"
                />
                <ul className="list-disc leading-10">
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">For business financing</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">No hidden costs</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Free Mentoring</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">Between N50,0000.00 to N1,500,000.00</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">Payments on reducing balance</li>
                </ul>
                <button 
                    onClick={()=>navigate("/loan")}
                    className="bg-green text-white rounded-md py-4 px-8 mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Get Started</button>
            </div>
            <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                <Text
                    style="font-semibold lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl sm:text-xl text-start text-green mb-4"
                    value="Personal Micro Loans (Personal Loan)"
                />
                <ul className="list-disc leading-10">
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Esusu/Daily Contribution</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Business Support Scheme “BSS’ (weekly Repayment)</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Supports cash flow and day to day running of business</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">No hidden costs</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">Free Mentoring – where deemed appropriate</li>
                </ul>
                <button 
                    onClick={()=>navigate("/loan")}
                    className="bg-green text-white rounded-md py-4 px-8 mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Get Started</button>
            </div>
            <div className="mb-8 bg-white rounded-md lg:p-8 xl:p-8 md:p-8 sm:p-4 xs:p-2">
                <Text
                    style="font-semibold lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl sm:text-xl text-start text-green mb-4"
                    value="Group Loans "
                />
                <ul className="list-disc leading-10">
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Association</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Self-Help groups</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black">Cooperatives</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">No hidden costs</li>
                    <li className="mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm text-black mb-2">Free Mentoring – where deemed appropriate</li>
                </ul>
                <button 
                    onClick={()=>navigate("/loan")}
                    className="bg-green text-white rounded-md py-4 px-8 mb-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm cursor">Get Started</button>
            </div>
            <div className="flex flex-wrap flex-row justify-center items-center">
                <span className="me-4 lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm">
                Apply for any of these loans by visiting the
                </span>
                <span className="text-white">
                    <Link to="/loan" className="text-white lg:text-md xl:text-md md:text-md sm:text-sm xs:text-sm">
                        Get Started Page
                    </Link>
                </span>
            </div>
        </div>
    )
}