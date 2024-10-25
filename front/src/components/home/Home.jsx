import Content from "../content/Content";
import "./home.css";
import { CardContainer } from "../cardContainer/CardContainer";
import Header from "../header/Header";
import Footer from "../Fotter/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <CardContainer />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
