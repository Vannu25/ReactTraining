function MyFirstComponent(props){
    const {name,age} = props;
    console.log(name);
    console.log(age);

    return(
        <>
    <h2>
        Hello I am {name}, I am {age} years old and I am inside of MyFirstComponent
    </h2>;
    </>
    )
    }

    export default MyFirstComponent;