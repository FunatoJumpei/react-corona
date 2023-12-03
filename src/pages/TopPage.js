import Title from "../components/Title";
import Selector from "../components/Selector";
import Result from "../components/Result";

const TopPage = (props) => {
    //console.log("TopPageのprops:",props)
    return(
        <div>
            <Title/>
            {/*
             リアクトでは自分で作ったコンポーネントもほかのタグと同じようにReturnのカッコ内に記述できる。
             コンポーネントのタグの場合は大文字で始める。←これでReactがHTMLタグでなくコンポーネントタグであることを理解する。
            */}
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData}/>
            <Result countryData={props.countryData}/>
        </div>
    );
};

export default TopPage;