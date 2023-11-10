"use client"
import "./styles.scss";
import { useState,useEffect } from "react";
import LogoWithLabel from "./../assets/images/LogoWithLabel.png";
import OsrCoinToken from "./../assets/images/osiracoinstill.png"
import InputBox from "../components/InputBox";
import Image from "next/image";
import CustomModal from "../components/Modal";
import Description from "./description";
import OsiraSeparator from '../assets/images/Line7.png';

const Token = () => {
    const [err1, setErr1] = useState(null)
    const [err2, setErr2] = useState(null)
    const [mailId, setMailId] = useState('')
    const [showModal, setShowModal] = useState(!1)
    const [isConfirmed, setIsConfirmed] = useState(!1)

    const closeModal = _ => setShowModal(!1)
    const isValidEmail = id => /\S+@\S+\.\S+/.test(id)
    const confirmBtnCbk = e => {
        // get mail id
        console.log('mail id:', mailId)
        if(!!!mailId) return setErr2('enter a valid email')
        // send the mail id to server where mail will be sent
        // wait for the response, once received, show next details
        setIsConfirmed(!0)
    }

    const prepEnrolling = _ => {
        setErr1(null)
        setErr2(null)
        setIsConfirmed(!1)
        setShowModal(!0)
    }

    const mailIdIpCbk = e => {
        setErr2(null)
        const v = e.target.value
        if(!!!v) return setErr1(null)
        if (!isValidEmail(v)) return setErr1('email is invalid')
        setErr1(null)
        setMailId(v);
    }
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
                            {/* <InputBox label={"Live Date"} placeholder={"XX/XX/XX"} style={{}} disabled={false} />
                            <InputBox label={"Price"} placeholder={"$$"} style={{}} disabled={false} />
                            <InputBox label={"Phase 1 supply"} placeholder={"XX,XX,XXX"} style={{}} disabled={false} />
                            <InputBox label={"Total supply"} placeholder={"XX,XX,XXX"} style={{ borderBottom: 0 }} disabled={true} /> */}
                            <h1>Tokenomics under audit</h1>

                            {/* <InputBox label={"Tokenomics"} placeholder={"Tokenomics"} style={{}} disabled={false} />
                            <InputBox label={"under"} placeholder={"under"} style={{}} disabled={false} />
                            <InputBox label={"audit"} placeholder={"audit"} style={{}} disabled={false} />
                            <InputBox label={""} placeholder={""} style={{ borderBottom: 0 }} disabled={true} /> */}
                            <button 
                                onClick={prepEnrolling}
                                className="btn btn-linear EnrollStyle" 
                            >
                                Enroll
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row rowStyle">
                    <Description />
                </div>

            </div>
        </div>
        <CustomModal isOpen={showModal} onClose={() => { setShowModal(false) }}>
            <div id="modal--mail-confirm">
                <h7>
                    {isConfirmed ? 'Email submitted' : 'Join the Osira community'}
                </h7>
                <Image src={OsiraSeparator} className="separator_in_modal" alt="osira_separator"></Image>
                <p>
                    {
                        isConfirmed ?
                        'Thanks for showing us your support' :
                        'Submit your email address and we\'ll keep you informed on the ICO and the platform\'s full launch'
                    }
                </p>
                <input 
                    required
                    type="email"
                    name="mail_id"
                    onChange={mailIdIpCbk}
                    placeholder="Email address"
                    className={`confirm-mail_id ${isConfirmed ? 'display-none' : ''}`}
                />
                {err1 && <h6 style={{color: 'red'}}>{err1}</h6>}
                <button 
                    onClick={isConfirmed ? closeModal : confirmBtnCbk}
                    className={`mail--customBtn ${isConfirmed ? 'mail-confirmed' : 'mail-not-confirmed'}`} 
                >
                    {isConfirmed ? 'Okay' : 'Confirm'}
                </button>
                {err2 && <h6 style={{color: 'red'}}>{err2}</h6>}
            </div>
        </CustomModal>
        </>

    );
};

export default Token;