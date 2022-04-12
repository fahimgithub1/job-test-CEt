import classes from "../Css_files/selctionsection.module.css";

export default function fristselacComponnet({valu1, valu2, handelClickA}){
    
    return(
        <div>
            <input onClick={handelClickA} className={classes.chakbox_select} type="checkbox"/>
            <label>{valu1}</label>
            <input className={classes.chakbox_select2} type="text" value={valu2}/>
        </div>
    )
}