import Title from "../components/Title";
import Selector from "../components/Selector";

const TopPage = () => {
    return(
        <div>
            <Title/>
            {/*
             リアクトでは自分で作ったコンポーネントもほかのタグと同じようにReturnのカッコ内に記述できる。
             コンポーネントのタグの場合は大文字で始める。←これでReactがHTMLタグでなくコンポーネントタグであることを理解する。
            */}
            <Selector/>
        </div>
    );
};

export default TopPage;