import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Design from "./pages/Design";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Manufacturing from "./pages/Manufacturing";
import NewsLetter from "./components/NewsLetter";
import Planning from "./pages/Planning";
import Research from "./pages/Research";
import Sales from "./pages/Sales";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/design" element={<Design />} />
        <Route path="/research" element={<Manufacturing />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
