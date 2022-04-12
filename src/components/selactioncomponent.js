import classes from "../Css_files/selctionsection.module.css";
import Agreecomponents from "./Agreey";
import BoutoneAubmit from "./Bouttone";
import FristSelaction from "./Fristselction";
import SecondSelaction from "./SecondSeleaction";
import { useState } from "react";

export default function Selactioncomponent({name}){
    const [A, setA] = useState(1);
    const [B, setB] = useState(1);
    const [C, setC] = useState(1);
    const [agr, setAgr] = useState("false");
    const [seleactvalue, setseleactvalue] = useState("0");

    let handelClickA = (e) =>{
        setB(1)
        setC(1)
        A===0 ? setA(1):setA(0);
        // this.checkbox('is_broker', true)
        // setA(e){
        //     e.target.checked
        // }
    } 
    let handelClickB = (e) =>{
        setA(1)
        setC(1)
        B===0 ? setB(1):setB(0);
    } 
    let handelClickC = (e) =>{
        setA(1)
        setB(1)
        C===0 ? setC(1):setC(0);
    } 
    
    let handelClickAgr = (e) =>{
        if(agr === "false"){
            setAgr("true")
        }else{
            setAgr("false")
        }
        console.log(agr);
        // e.target.chaked
    } 

    const handleSelectValue = (e) =>{
        setseleactvalue(e.target.value);
        console.log(e.target.value)
    }

    return(
        <div className={classes.selctiondiv}>
            <FristSelaction 
                            handelClickA={handelClickA} 
                            handelClickB={handelClickB} 
                            handelClickC={handelClickC} 
            />
            <SecondSelaction A={A} 
                             B={B} 
                             C={C} 
                             handleSelect={handleSelectValue}
            />
            <Agreecomponents handelClickAgr={handelClickAgr}/>
            
            <BoutoneAubmit agr={agr} seleactvalue={seleactvalue}  name={name}/>
        </div>
    )
}