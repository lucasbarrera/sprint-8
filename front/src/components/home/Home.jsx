import SideBar from "../sideBar/SideBar";
import Content from "../content/Content";
import "./home.css";
import { CardContainer } from "../cardContainer/CardContainer";
const Home = () => {
  return (
    <>
      <SideBar />
      <CardContainer />
      <Content />
    </>
  );
};

export default Home;
