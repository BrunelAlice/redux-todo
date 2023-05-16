// Import style from MDB
import
{
    MDBIcon,
    MDBTooltip,
} from "mdb-react-ui-kit";

// Import redux modules
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../Redux/todos';

// A component to render the todo list
function RemoveTodo( { id } )
{
    // Used to dispatch redux delete action
    const dispatch = useDispatch();

    return (
        <MDBTooltip
            tag="a"
            title="Remove item"
        >
            <MDBIcon fas icon="times" color="primary" onClick={() => dispatch(deleteTodo(id)) } />
        </MDBTooltip>
    );
}

export default RemoveTodo;