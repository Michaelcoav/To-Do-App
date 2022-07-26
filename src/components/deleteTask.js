import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

// deleteTask will delete the task from screen 
const DeleteTask = ({ id, taskList, setTaskList}) => {

    // filter out task with key id and update task list
    const handleClick = () => {
        // make an arr of all the tasks without the task id
        const newTasks = taskList.filter((task) => task.id !== id);

        setTaskList(newTasks);
    };

    return (
        <div style={{display: "flex"}}>
            <IconButton children={<DeleteIcon />} onClick={handleClick}/>
        </div>
    );
};

export default DeleteTask;