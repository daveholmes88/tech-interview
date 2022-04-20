import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import Assignee from './components/Assignee';
import Task from './components/Task';
import Todo from './components/Todo';
import Done from './components/Done';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Column = styled.div`
  width: 300px;
  margin: 20px;
  justify-content: center;
`

const Card = styled.div`
  width: 200px;
  outline: 5px solid black;
`

function App() {

  const [done, setDone] = useState(false);
  const [todo, setTodo] = useState(false);
  const [assignee, setAssignee] = useState("");
  const [tasks, updateTasks] = useState([]);

  const addTask = (task) => {
    updateTasks([...tasks, task]);
  };

  




  return (
    <>
    <Task addTask={addTask} />
    <Todo tasks={tasks} />
    <Assignee />
    <Done />
    
    </>
  );
}

export default App;
