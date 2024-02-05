import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/home';
import { AboutUsPage } from './pages/about';
import { AccountTypePage } from './pages/accountType';
import { PersonalFormPage } from './pages/PersonalForm';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ApplicationProcessPage } from './pages/applicationProcess';
import { CareerPage } from './pages/career';
import { ContactusPage } from './pages/contactUs';
import { LoanPage } from './pages/loan';
import { LoanPackagePage } from './pages/loanPackage';
import { ChairManMessagePage } from './pages/chairmanMessage';
import { SuccessStoryPage } from './pages/successStory';
import { PageNotFound } from './pages/404';
import { Toaster } from 'react-hot-toast';
import { ThankYou } from './pages/thankyou';

function App() {

  return (
    <>
     {/* <Provider store={store}> */}
        <Router>
              <Routes>
                <Route exact path="/" element={ <HomePage/>}/>
                <Route exact path="/aboutUs" element={ <AboutUsPage/>}/>
                <Route exact path="/account_type" element={ <AccountTypePage/>}/>
                <Route exact path="/open_account/:title" element={ <PersonalFormPage/>}/>
                <Route exact path="/personal_form" element={ <PersonalFormPage/>}/>
                <Route exact path="/chairmanMessage" element={ <ChairManMessagePage/>}/>
                <Route exact path="/application_process" element={ <ApplicationProcessPage/>}/>
                <Route exact path="/career" element={ <CareerPage />}/>
                <Route exact path="/contact" element={ <ContactusPage/>}/>
                <Route exact path="/loan" element={ <LoanPage/>}/>
                <Route exact path="/thank-you" element={ <ThankYou/>}/>
                <Route exact path="/loan_package" element={ <LoanPackagePage/>}/>
                <Route exact path="/success_stories" element={ <SuccessStoryPage/>}/>
                <Route exact path="*" element={ <PageNotFound/>}/>
              </Routes>
        </Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      {/* </Provider> */}
    </>
  )
}

export default App
