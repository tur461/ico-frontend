
import Link from 'next/link';
import  "./styles.scss";

const Button = ({title,onClick}) => {
    return (
        <a className="btn btn-linear btnFont" onClick={onClick?onClick:(e)=>{e.preventDefault()}}>{title}</a> 
    );
};

export default Button;