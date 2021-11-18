import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";


export default () => {
    
    return (
        <>
        <h2> I am inside of MySecondComponent</h2>;
        <FirstChild />
        <SecondChild />
        <ThirdChild />
        </>
    );

  };