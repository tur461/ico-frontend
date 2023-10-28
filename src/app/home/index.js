import Banner from "./Banner";
import Problem from "./Problem";
import Solution from "./Solution";
import Definition from "./Definition";
import Quotes from "./Quotes";
import Working from "./Working";
import Roadmap from "./Roadmap";
import Blog from "./Blog";


import "./styles.scss";
const Home = () => {
    return (
        <div className="homeContainerMain">
            <Banner></Banner>
            <div className="withoutBanner">
                <Problem />
                <Solution />
                <Definition />
                <Quotes />
                <div className="workingbackImag">
                <Working />
                </div>
                <Roadmap />
                <Blog />
                {/* <Solution />
                <Definition />
                
                <Working />
                 */}
                {/* 
                
               
               
               */}
            </div>
        </div>
    )

}
export default Home