import Title from "../components/Title";

const TopPage = () => {
    return(
        <div>
            <Title/>
            {/*
             リアクトでは自分で作ったコンポーネントもほかのタグと同じようにReturnのカッコ内に記述できる。
             コンポーネントのタグの場合は大文字で始める。←これでReactがHTMLタグでなくコンポーネントタグであることを理解する。
            */}
        </div>
    );
};

export default TopPage;