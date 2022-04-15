import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

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
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [list1, setList1] = useState([])
  const [list2, setList2] = useState([])
  const [list3, setList3] = useState([])

  const newItem = (e) => {
    e.preventDefault();
    const item = {
      id: uuid(),
      description,
      title
    }
    setList1([...list1, item]);
    setDescription('');
    setTitle('')
  }

  const advanceToList2 = (item) => {
    const newList = list1.filter(list => list.id !== item.id)
    setList1(newList)
    setList2([...list2, item])
  }

  const createItemList1 = (item) => {
    return (
      <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button onClick={() => advanceToList2(item)}>{'>'}</button>
        <br></br>
        <button onClick={() => deleteItem(item, list1, setList1)}>Delete</button>
      </Card>
    )
  }

  const advanceToList3 = (item) => {
    const newList = list2.filter(list => list.id !== item.id)
    setList2(newList)
    setList3([...list3, item])
  }

  const downToList1 = (item) => {
    const newList = list2.filter(list => list.id !== item.id)
    setList2(newList)
    setList1([...list1, item])
  }

  const downToList2 = (item) => {
    const newList = list3.filter(list => list.id !== item.id)
    setList3(newList)
    setList2([...list2, item])
  }

  const createItemList2 = (item) => {
    return (
      <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button onClick={() => downToList1(item)}>{'<'}</button>
        <button onClick={() => advanceToList3(item)}>{'>'}</button>
        <br></br>
        <button onClick={() => deleteItem(item, list2, setList2)}>Delete</button>
      </Card>
    )
  }

  const createItemList3 = item => {
    return (
      <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button onClick={() => downToList2(item)}>{'<'}</button>
        <br></br>
        <button onClick={() => deleteItem(item, list3, setList3)}>Delete</button>
      </Card>
    )
  }

  const deleteItem = (item, list, method) => {
    const newList = list.filter(thing => thing.id !== item.id)
    method(newList)
  }

  return (
    <Container>
      <h1>KANBAN BOARD</h1>
      <Column>
        <form>
        <label for="titlen">Title:</label>
        <br></br>
        <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" value={title} />
        <br></br>
        <label for="description">Description:</label>
        <br></br>
        <input onChange={(e) => setDescription(e.target.value)} type="text" id="description" name="description" value={description} />
        <br></br>
        <input type="submit" value="Submit" onClick={(e) => newItem(e)}/>
        </form>
      </Column>
      <Column>
        <h2>List 1</h2>
        {list1.map(item => createItemList1(item))}
      </Column>
      <Column>
        <h2>List 2</h2>
        {list2.map(item => createItemList2(item))}
      </Column>
      <Column>
      <h2>List 3</h2>
        {list3.map(item => createItemList3(item))}
      </Column>
    </Container>
  );
}

export default App;
