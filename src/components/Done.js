import { useState } from "react";

function Done() {

    const [task, setTask] = useState({
        name: "",
        description: "",
        status: "done",
    });

    return (
      <h1>Done</h1>
    );
  }

  export default Done;