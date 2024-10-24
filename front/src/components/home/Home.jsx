import SideBar from "../sideBar/SideBar";
import Content from "../content/Content";
import "./home.css";
import { CardContainer } from "../cardContainer/CardContainer";
const Home = () => {
  return (
    <>
      <div className="header">
        <h1>header</h1>
      </div>
      <SideBar />
      <CardContainer />
      <Content />
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Home;
