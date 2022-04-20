import { useState } from "react";

function Assignee({tasks}) {


    const [assignee, setAssignee] = useState({

        //add assignees to array and asisgn the person a task 

        name: "",
        task: tasks.name,
    });

    return (
      <h1>Assignee</h1>

    //   mapped array of assignees array dropdown pased to the task/todo component 

      //create assignee/person form and populateadd to assignee state
    );
  }

  export default Assignee;