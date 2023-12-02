import countriesJson from "../countries.json";
import {useState} from "react";

const Selector = (props)=> {
    //console.log("Selectorのprpops:",props)
    return(
        <div>
            <select onChange={(e)=>props.setCountry(e.target.value)}>
            <option>Select A Country</option>
                {props.countriesJson.map((kuni, index) =>  /** map()はおそらく、importしているJsonの[]を引数に指定した名前として分解している */
                        <option key={index} value={kuni.Slug} >{kuni.Country}</option> //map()を使ってHtmlタグを表示させた場合、Reactにタグを認識させるためにはkeyと呼ばれる通し番号をつける必要がある。map()では自動的に通し番号も生成される。
                    )
                }
            </select>
            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;