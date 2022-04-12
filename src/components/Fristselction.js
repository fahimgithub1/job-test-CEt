
import classes from "../Css_files/selctionsection.module.css";
import FristselacComponnet from "./fistsectcomonent";

export default function FristSelaction({handelClickA,handelClickB,handelClickC}){
    return(
        <div className={classes.fristselctiondiv}>
            <FristselacComponnet handelClickA={handelClickA} valu1="Manufacturing" valu2="10"/> <br />
            <FristselacComponnet handelClickA={handelClickB} valu1="service" valu2="04"/> <br />    
            <FristselacComponnet handelClickA={handelClickC} valu1="other" valu2="03"/>
        </div>
        
    )
}