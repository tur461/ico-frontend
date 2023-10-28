"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LineAboveFooter from "./../../assets/images/lineabovefooter.png";
import "./styles.scss"

const InputBox = ({label,placeholder,style,disabled}) => {
    return (
       <>
            <div  className="row mb-3 boxStyle" style={style}>
            <label htmlFor="colFormLabelSm" className={`col-sm-6 ${disabled?'labelHighlight':''}`} >{label}</label>
            <div className="col-sm-6">
                <input type="text" className ="form-control form-control-sm inputStyle" id="colFormLabelSm" placeholder={placeholder} disabled={disabled} />
            </div>
            </div>
           {!disabled&& <Image src={LineAboveFooter} alt="LineAbove" className="inputlineAbove img-fluid"/>}
           
            </>
    );
};

export default InputBox;