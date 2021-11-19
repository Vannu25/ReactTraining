  // step1
  //   function MySecondComponent(){
  //   return<h2>
  //       I am inside of MySecondComponent
  //   </h2>;
  //   };

  //   export default MySecondComponent;

  // step2
  //   const MySecondComponent = () => {
  //     return<h2>
  //       I am inside of MySecondComponent
  //   </h2>;  
  //   };

  //   export default MySecondComponent;

// Step3
    export default (props) => {
      const {name,age} = props;
    console.log(name);
    console.log(age);
     return<h2>Hello I am {name}, I am {age} years old and I am inside of MyFirstComponent</h2>;
   };
