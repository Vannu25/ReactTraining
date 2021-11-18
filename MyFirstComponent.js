import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";


function MyFirstComponent(){
    return (
        <>
        <h2> I am inside of MyFirstComponent</h2>;
        <FirstChild />
        <SecondChild />
        <ThirdChild />
         </>
        );
    };

    export default MyFirstComponent;