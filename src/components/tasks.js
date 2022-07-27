import { ButtonGroup, Card, CardContent, Typography} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteTask from './deleteTask.js';


// task component will display task given content and due date prop
const Tasks = ({content, dueDate, id, taskList, setTaskList}) => {

    return (
        <div>

            <Card style={{margin: ".7em", display: "inline-flex"}} >

                <CardContent >   
                    {/** make the text an invisble button */} 
                    <Typography textAlign="center" align="center" variant="body1">
                        {content}
                    </Typography>
                </CardContent>

                <ButtonGroup sx={{display: "flex", justifyContent: "center"}}>
                    {/** <IconButton children={<EditIcon/>} /> */}
                    <DeleteTask id={id} taskList={taskList} setTaskList={setTaskList} />
                </ButtonGroup>
                 
            </Card>
            
            
            
        </div>
    );
};


export default Tasks;

