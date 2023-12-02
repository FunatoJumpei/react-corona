import countriesJson from "../countries.json";
import {useState} from "react";

const Selector = ()=> {
    const [country,setCountry] = useState("");

    const getCountryData = () => {
        fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return(
        <div>
            <select onChange={(e)=>setCountry(e.target.value)}>
            <option>Select A Country</option>
                {countriesJson.map((kuni, index) =>  /** map()はおそらく、importしているJsonの[]を引数に指定した名前として分解している */
                        <option key={index} value={kuni.Slug} >{kuni.Country}</option> //map()を使ってHtmlタグを表示させた場合、Reactにタグを認識させるためにはkeyと呼ばれる通し番号をつける必要がある。map()では自動的に通し番号も生成される。
                    )
                }
            </select>
            <button onClick={getCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;