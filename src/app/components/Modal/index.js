import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Image from "next/image";
import crossicon from "../../assets/images/crossicon.png"
import LineAboveFooter from "./../../assets/images/lineabovefooter.png"
import "./styles.scss";
const CustomModal = ({isOpen,onClose,children}) => {
 
    const customStyles = {
        overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)',
          filter: 'blur(0%)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            
          // background: 'linear-gradient(to right, #FFFE00 100%,#FFFFFF 10%);',
           // boxShadow: '1px 2px 5px #000000'
        }
    }
    return (
        <div style={{ zIndex: 1 }}>
            {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
            <Modal isOpen={isOpen} onRequestClose={null} style={customStyles}>
            {/* <button onClick={onClose} className="closebtn">close</button> */}
            <Image src={crossicon} className="closebtn" alt={"CrossIcon"} onClick={onClose}/>
              {children}

            </Modal>
        </div>
    )
}
export default CustomModal;