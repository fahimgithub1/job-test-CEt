import classes from "../Css_files/selctionsection.module.css";

export default function SmoleSelactrcomponent({title, value1,value2,value3,value4,
    value5,value6,value7,value8,value9,value10,value11,handleSelect}){

    return(
        <div className={classes.someselactordiv}>
            <label>{title}</label>
            <br/>

            <select name="value" id="Textile" onChange={handleSelect}>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
                <option value={value5}>{value5}</option>
                <option value={value6}>{value6}</option>
                <option value={value7}>{value7}</option>
                <option value={value8}>{value8}</option>
                <option value={value9}>{value9}</option>
                <option value={value10}>{value10}</option>
                <option value={value11}>{value11}</option>
            </select>
        </div>
    )
}