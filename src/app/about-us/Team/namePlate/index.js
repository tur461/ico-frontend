import  "./styles.scss";

const NamePlate = ({name}) => {
   // console.log("content",content);
    return (
            <div className="namePlateContainer">
             <div className="box">  
              {name}
              </div>   
            </div>
  
        
    );
};

export default NamePlate;