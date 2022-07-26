import { IconButton, FormControl, OutlinedInput, InputAdornment, InputLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from 'uuid';

// add task will handle adding new tasks to task component
const AddTask = ({ taskList, setTaskList, content, setContent }) => {
    

    const handleClick = () => {
        // checks if there is already a task with the same content
        const duplicateTask = taskList.some((task) => {
            if (task.content === content) {
                return true;
            }

            return false;
        })


        // make sure an empty task is not created
        // next make sure a duplicate task is not created
        if (content === "" || duplicateTask) { 
            // resets the content state to an empty string
            setContent(""); 

            // resets the value of the task label to empty string after button is clicked to add
            document.getElementById("add-task").value = "";

            return;
        }

        
        // every task is an obj that has content, id and due date properties
        const newTask = {
            content: content, 
            id: uuid()
        };

        // everything in task, appended to end the state content
        const allTasks = [...taskList, newTask];
    
        setTaskList(allTasks);

        // resets the content state to an empty string
        setContent("");

        // resets the value of the task label to empty string after button is clicked to add
        document.getElementById("add-task").value = "";
    }

    const handleChange = (event) => {
        // uses set content to update value of content
        setContent(event.target.value);
    }

    return (
        <div>
            <FormControl>
                <InputLabel children="Enter Task" />
                <OutlinedInput endAdornment={ 
                    <InputAdornment position="end">
                        <IconButton onClick={handleClick} edge="end" children={<AddIcon />}/>
                    </InputAdornment>
                } onChange={handleChange} id="add-task" label="Enter Task"/>
            </FormControl>

        </div>
     
    );
};

export default AddTask;
