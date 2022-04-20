
import styled from 'styled-components';
import uuid from 'react-uuid';

export default function Todo({ tasks, deleteTask }) {

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


    return (
        <div>
            {tasks.map((task) => (
                <>

                    <Container>
                        <Column>
                            <Card>
                                <p><label>Name:</label>
                                    {task.name}</p>
                                <p><label>Description:</label>
                                    {task.description}</p>
                                <p><label>Status:</label>
                                    {task.status}</p>
                                {/* assignee field added to card  */}
                                {/* buttun to delete task from state on click */}
                                {/* button to move task to diffrent lane on click */}
                                {/* move card on click and change state to "done" */}

                            </Card>
                        </Column>
                    </Container>
                </>
            ))}
        </div>
    );
}