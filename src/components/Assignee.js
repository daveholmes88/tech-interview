import { useState } from "react";

function Assignee() {

    const [task, setTask] = useState({
        name: "",
        description: "",
        status: "assignee",
    });

    return (
      <h1>Assignee</h1>
    );
  }

  export default Assignee;