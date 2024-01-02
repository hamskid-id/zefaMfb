import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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

function App() {

  return (
    <>
     {/* <Provider store={store}> */}
        <Router>
              <Routes>
                <Route exact path="/" element={ <HomePage/>}/>
                <Route exact path="/aboutUs" element={ <AboutUsPage/>}/>
                <Route exact path="/account_type" element={ <AccountTypePage/>}/>
                <Route exact path="/personal_form" element={ <PersonalFormPage/>}/>
                <Route exact path="/chairmanMessage" element={ <ChairManMessagePage/>}/>
                <Route exact path="/application_process" element={ <ApplicationProcessPage/>}/>
                <Route exact path="/career" element={ <CareerPage />}/>
                <Route exact path="/contact" element={ <ContactusPage/>}/>
                <Route exact path="/loan" element={ <LoanPage/>}/>
                <Route exact path="/loan_package" element={ <LoanPackagePage/>}/>
              </Routes>
        </Router>
        <ToastContainer />
      {/* </Provider> */}
    </>
  )
}

export default App
