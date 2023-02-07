import AboutConference from "./components/AboutConference";
import AboutInstitute from "./components/AboutInstitute";
import AuthorGuidelines from "./components/AuthorGuidelines";
import CallForPaper from "./components/CallForPaper";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";
import ImportantDates from "./components/ImportantDates";
import InternationalAdvisory from "./components/InternationalAdvisory";
import NationalAdvisory from "./components/NationalAdvisory";
import Navbar from "./components/Navbar";
import PaperSubmission from "./components/PaperSubmission";
import Patrons from "./components/Patrons";
import Registration from "./components/Registration";

function App() {


  return (
    <>
      <div className="App  ">
        <Navbar />
        <Home />
        <AboutInstitute />
        <AboutConference />
        <CallForPaper />
        <Registration />
        <PaperSubmission />
        <ImportantDates />
        <AuthorGuidelines />
        <Patrons />
        <InternationalAdvisory />
        <NationalAdvisory />
        <Committee />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}

export default App;
