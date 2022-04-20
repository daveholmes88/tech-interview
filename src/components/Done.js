import { useState } from "react";

function Done({assignee}) {

    const [task, setTask] = useState({

        assignee: assignee.name,
        task: "",
        status: "",
    });

    return (
      <h1>Done</h1>

    //   display array of task marked "done" based on state change 
    );
  }

  export default Done;