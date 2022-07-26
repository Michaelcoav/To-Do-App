import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import AddTask from './components/addTasks.js';
import Task from './components/tasks.js';



// App component will be the center of the project
// will contain task list state that will be able to send
// to different features such as add, check, edit, and remove tasks
function App() {
  // taskList is the list that will hold all the lists
  // make task list full of cards instead of tasks
  const [taskList, setTaskList] = useState([]);

  // content is the content of the task being added
  const [content, setContent] = useState("");

  return (
    <div>
      <Container  maxWidth="lg" style={{marginTop: "1rem"}}>
        <h1 style={{textAlign: "center", fontFamily: "arial"}}>To Do List</h1>
        <br />
   
        <Grid container lineHeight="2rem" alignItems="center" justifyContent="center" direction="column">
          <AddTask taskList={taskList} setTaskList={setTaskList} content={content} setContent={setContent}/>
          {/**<TextField id="filled" label="due date for task" /> */}
          
          {/** Lets user knows they have no tasks left*/}
          {taskList.length === 0 && <Typography sx={{margin: "1rem"}} variant="body1" children="No tasks left"/>}

          {taskList.map((task) => {
              return (
                  // in the content prop, and due date props
                  <Task content={task.content} key={uuid()} id={task.id} taskList={taskList} setTaskList={setTaskList} />

              );
          })}
        </Grid>
      </Container>
    </div>
  );

}

export default App;
