import {useState, useEffect} from 'react'
import axios from 'axios'


// useResources is a function declaration.
                    // It takes in a string
const useResources = resource => {
  // Here we're setting a property on our state to resources: and setting the intial value to be an empty array []
    const [resources, setResources] = useState([]);
  
    // Here we're making a useEffect call, which is essentially both componentDidMount and componentDidUpdate in one.
    // It takes a callback function as it's first parameter and an array as it's second parameter.
    useEffect(() => {
      // Notice the syntax. useEffect does not normally allow us to make a function call inside. But because we're wrapping the inner function in parentheses
      // it's the same as if we declared this async function above the useEffect then called it inside the useEffect callback.
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
          // Here we're re-setting the state of our resources property on state to be the array we got back from our API call instead of an empty array.
        setResources(response.data);
      })(resource);
      // Here is the second parameter of useEffect.
      // If we set this to be an empty array, [], then it's basically saying we want useEffect to function only like componentDidMount.
      // If we pass in a variable here (like resource) then we're saying, hey, if the variable that's passed into this array ever changes, then run the callback of this useEffect call again.
    }, [resource]);
  
    return resources;
  };

  export default useResources