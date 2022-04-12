import { useEffect, useState } from "react";
import classes from "../Css_files/sowing.module.css"
// import useData from "../Hooks/useData";
import TableRowComponnent from "./tableRowcomponent";
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore";

export default function AShowingTabllepp() {
  // const {loading, error, data} = useData();
  const [users, setUsers] = useState([]);
  const usersColectionsRef = collection(db, 'users');


  useEffect(()=>{

    const getUsers = async ()=>{
        const data = await getDocs(usersColectionsRef);
        // console.log(data);
        setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    } 

    getUsers();
  },[usersColectionsRef]);

  return (
    <div className={classes.sowingsection}>
      <h1>See All  Data</h1> 

      <table className={classes.tablediv}>
        <tbody>
            <tr className={classes.tabletr}>
              <th  className={classes.tableth}>Name</th>
              <th  className={classes.tableth}>Selector</th>
              <th  className={classes.tableth}>Agree</th>
            </tr>

            {users.length > 0 && 
              users.map((user) =>(
                <TableRowComponnent 
                        name={user.Name}  
                        selecor={user.Selector}   
                        agrwee={user.Agree}
                />
              )
            )}
        </tbody>
      </table>

    </div>
  );
}
