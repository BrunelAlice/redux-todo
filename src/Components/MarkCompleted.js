// Import style from MDB
import
{
    MDBCheckbox,
} from "mdb-react-ui-kit";

// Import redux modules
import { useDispatch } from 'react-redux';
import { markTodo } from '../Redux/todos';

// A component to mark the todo as completed
function MarkCompleted( { id, completed } )
{
    // Use dispatch to allow redux edit action
    const dispatch = useDispatch();

    // Use a function to handle checkbox state
    const handleChange = () =>
    {
        let marked = true;        
        if (completed === false)
        {
            // Use dispatch to mark todo as complete
            dispatch(markTodo({ id, marked }));
        } else if (completed === true)
        {
            // Use dispatch to unmark
            marked = false;
            dispatch(markTodo({ id, marked }));
        }
        
    }; 

    return (
        <MDBCheckbox
            name="flexCheck"
            value=""
            id={id}
            className="me-3"
            checked={completed}
            onChange={handleChange}
        />
    );
}

export default MarkCompleted;