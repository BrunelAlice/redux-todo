// Import style from MDB
import
{
    MDBBadge,
} from "mdb-react-ui-kit";

// Import redux modules
import { useDispatch } from 'react-redux';
import { editTodo } from '../Redux/todos';

// A component to edit the todo item
function EditTodo( { id } )
{
    // Use dispatch to allow redux edit action
    const dispatch = useDispatch();

    return (
        <MDBBadge className="mx-2" color="info" onClick={() => dispatch(editTodo(id))}>
            Modify
        </MDBBadge>
    );
}

export default EditTodo;