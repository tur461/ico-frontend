"use client"
import "./styles.scss";
import { useState,useEffect } from "react";
import LogoWithLabel from "./../assets/images/LogoWithLabel.png";
import OsrCoinToken from "./../assets/images/osiracoinstill.png"
import InputBox from "../components/InputBox";
import Image from "next/image";
import CustomModal from "../components/Modal";
import Description from "./description";

const Token = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div className="tokenContainer">
            <h2 className="heading tokenHeading">OSR Tokens</h2>

            <div className="row rowStyle">
                <div className="col"> <Image src={OsrCoinToken} alt="Logo With Label" className="tokenImageStyle" priority={true} /></div>
                <div className="col ">
                    <div className="tokenBorder">
                        <div className="tokenBox">
                            <InputBox label={"Project name"} placeholder={"Osira"} style={{}} disabled={false} />
                            <InputBox label={"Token name"} placeholder={"OSR"} style={{}} disabled={false} />
                            <InputBox label={"Live Date"} placeholder={"XX/XX/XX"} style={{}} disabled={false} />
                            <InputBox label={"Price"} placeholder={"$$"} style={{}} disabled={false} />
                            <InputBox label={"Phase 1 supply"} placeholder={"XX,XX,XXX"} style={{}} disabled={false} />
                            <InputBox label={"Total supply"} placeholder={"XX,XX,XXX"} style={{ borderBottom: 0 }} disabled={true} />
                            <button className="btn btn-linear EnrollStyle" onClick={()=>setShowModal(true)}>Enroll</button>
                        </div>
                    </div>
                </div>
                <div className="row rowStyle">
                    <Description />
                </div>

            </div>
        </div>
        <CustomModal isOpen={showModal} onClose={() => { setShowModal(false) }}>
                <div className="details ">

                    <div className="Modaltitle">

                        <h6 className="address" style={{ textAlign: 'center',fontSize:'24px',fontWeight:600 }}>Stay Updated</h6>
                        <p style={{ marginTop: '10px',fontSize:'18px',fontWeight:600 }}>Add your email id to stay updated for DAO platform launch</p>

                    </div>
                    <div>
                        <form className='formInput'><div style={{marginBottom:'20px'}}>
                            <input />
                        </div>
                          <button className='btn btn-linear Custbtn'>Confirm</button>
                            {/* <Button title={"Confirm"} onClick={(e) => {
                                e.preventDefault();
                                //alert("hello")
                                setShowModal(true)
                            }} /> */}
                        </form>
                    </div>

                </div>
            </CustomModal>
        </>

    );
};

export default Token;