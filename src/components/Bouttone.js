import classes from "../Css_files/selctionsection.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";

export default function BoutoneAubmit({agr,seleactvalue,name}){
    const usersColectionsRef = collection(db, 'users');

    const createUsers = async () =>{
        // const data = await getDocs(usersColectionsRef);
        await addDoc(usersColectionsRef, {Agree:agr, Selector:seleactvalue, Name:name});
        agr = "";seleactvalue="";name="";
    }


    return(
        <div className={classes.buttonsdiv}>
            <button className={classes.buttonsbmit} onClick={createUsers}> 
                    Submit 
                    <FaTelegramPlane className={classes.buttonIcon} /> 
            </button>
        </div>
    )
}