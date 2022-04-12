import classes from "../Css_files/selctionsection.module.css";

export default function Agreecomponents({handelClickAgr}){

    return(
        <div className={`${classes.agreey_div}` }>
            <input type="checkbox" onClick={handelClickAgr} />
            <p>Agree to terms</p>
            
        </div>
    )
}