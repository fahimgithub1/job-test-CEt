import classes from "../Css_files/selctionsection.module.css";

export default function NameComponnent({handelName}){

    return(
        <div className={classes.namesection}>
            <label>Name: </label>
            <input type="text" 
                               placeholder="Enter your name" 
                               onChange={handelName} 
            />
        </div>
        
    )
}