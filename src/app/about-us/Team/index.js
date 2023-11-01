
import TeamBox from "./teamBox";
import Peter from "./../../assets/images/peter.png";
import Janette from "./../../assets/images/janette.png";
import "./styles.scss";

const Team = () => {
    return (
        <div className="row teamContainer">
            <h4  className="teamHeading" style={{ textAlign: 'center' }}><label className="teamContent">Osira</label> Team</h4>
            <div>
            <hr  className="bottomLine"/>
            </div>
            <div className="col boxGrad">
            {/* <div className="top-left"></div> */}
 
                <TeamBox name={"Peter Batt"} url={Peter} alt="avatar1" Content={() =>
                    <>
                        <p>Peter will continue his ‘top-down’ work with the project’s development team and technology partners to turn the Osira governance
                            concepts into a robust, operational product that fulfils the project’s aims and potential.
                            <br></br>
                            <br></br>
                            A political economy graduate and one-time national newspaper journalist and campaigner, Peter’s interests include politics, economics
                            and the environment. Having had considerable media experience, Peter will also be one of the platform’s public-facing figures,
                            representing Osira’s vision, mission and values to investors, customers, the media and public.</p>
                    </>

                } />
                 {/* <div className="bottom-right"></div> */}
            </div>
            <div className="col boxGrad">
         
                <TeamBox name={"Janette Benson"} url={Janette} alt="avatar2" Content={() =>
                    <>
                        <p>Janette will have a particular focus on partnership building and grassroots social movement alliances.
                            In addition to this ‘bottom-up’ work, she will also lead on developing the project’s human resources.
                            <br></br>
                            <br></br>
                            These reflect her academic background, having gained a first for her thesis on biotechnology, globalisation
                             and development, which formed part of her anthropology degree from University College London. Since then, Janette has been 
                             heavily involved with the social inclusion agenda in the UL, applying social movement and modernity theories to grassroots and 
                             marginalised community projects and, more recently, as part of a major NHS social inclusion research project. 
                            </p>

                    </>

                } />

            </div>

        </div>


    );
};

export default Team;