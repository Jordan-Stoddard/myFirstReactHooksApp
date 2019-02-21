import React, { useState } from "react";
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
  // This is essentially initializing a property on state called resource with the default value being 'posts'
  // the setResource variable essentially intializing a setState call, but it only re-sets the state of the variable to it's left.
    const [resource, setResource] = useState('posts')

  return (
    <div>
      <UserList />
      <div>
                    {/* Here we are setting an onClick function to change the value of our resource property on state. This is what setResource does.*/}
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      {/* Here we're passing down the value of our resource property on state as a prop called resource. */}
      <ResourceList resource={resource}/>
    </div>
  );
};

export default App;
