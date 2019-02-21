import React from "react";
import useResources from './useResources'

                        // Here we're destructuring our props to only take the value of our "resource" prop from our props object.
const ResourceList = ({ resource }) => {
  // Here we're making a useResources call and passing in the value of resource which will either be "posts" or "todos", which will make an API based on which string is passed in.
    const resources = useResources(resource)
  return (
    <ul>
      {/*Because we set resources variable on line 7 to evaluate down to the return of useResources and the return of useResources is an array, we can run a .map function on resources.
      Because resources is now an array that came back from our database. */}
      {resources.map(record => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
