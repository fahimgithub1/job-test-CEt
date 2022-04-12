import classes from "../Css_files/selctionsection.module.css";
import SmoleSelactrcomponent from "./SmoleSelactcomponent";
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";


export default function SecondSelaction({A,B,C,handleSelect}){
    const [selction01data, setUselction01data] = useState([]);
    const [selction02data, setUselction02data] = useState([]);
    const [selction03data, setUselction03data] = useState([]);
    const usersColectionsRef = collection(db, 'Selacttion01');
    const usersColectionsRef2 = collection(db, 'Selacttion02');
    const usersColectionsRef3 = collection(db, 'Selacttion03');

    useEffect(()=>{

        const getUsers = async ()=>{
            const data = await getDocs(usersColectionsRef);
            const data2 = await getDocs(usersColectionsRef2);
            const data3 = await getDocs(usersColectionsRef3);
            setUselction01data(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
            setUselction02data(data2.docs.map((doc)=>({...doc.data(), id: doc.id})));
            setUselction03data(data3.docs.map((doc)=>({...doc.data(), id: doc.id})));
        } 
    
        getUsers();
      },[usersColectionsRef,usersColectionsRef2,usersColectionsRef3]);

    return(
        <div className={classes.Secondselctiondiv}>
            <h4>Selact only one form there.</h4>
            
            <div style={{width:"100%"}}>
                <div className={A===0 ? "forsmoleshow": "forsmoleshow3"}>
                    
                    {selction01data.length > 0 && 
                        selction01data.map((selectordat) =>(
                            <div className={classes.smoleshowfolat}>
                                <SmoleSelactrcomponent title={selectordat.title}
                                    value1={selectordat.value1}
                                    value2={selectordat.value2}
                                    value3={selectordat.value3}
                                    value4={selectordat.value4}
                                    value5={selectordat.value5}
                                    value6={selectordat.value6}
                                    value7={selectordat.value7}
                                    value8={selectordat.value8}
                                    value9={selectordat.value9}
                                    value10={selectordat.value10}
                                    handleSelect={handleSelect}
                                />
                            </div>
                        )
                    )}

                </div>

                {/* 2nd selector */}
                <div className={B===0 ? "forsmoleshow": "forsmoleshow3"} >
                    {selction02data.length > 0 && 
                            selction02data.map((selectordat2) =>(
                                <div className={classes.smoleshowfolat}>
                                    <SmoleSelactrcomponent title={selectordat2.title}
                                        value1={selectordat2.value1}
                                        value2={selectordat2.value2}
                                        value3={selectordat2.value3}
                                        value4={selectordat2.value4}
                                        handleSelect={handleSelect}
                                    />
                                </div>
                            )
                    )}

                    
                </div>

                {/* 3rd selector */}
                <div className={C===0 ? "forsmoleshow": "forsmoleshow3"}>

                    {selction03data.length > 0 && 
                            selction03data.map((selectordat3) =>(
                                <div className={classes.smoleshowfolat}>
                                    <SmoleSelactrcomponent title={selectordat3.title}
                                        value1={selectordat3.value1}
                                        value2={selectordat3.value2}
                                        handleSelect={handleSelect}
                                    />
                                </div>
                            )
                    )}
                    
                </div>
            </div>

        </div>
    )
}