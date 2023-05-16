// Import style from MDB
import
{
    MDBTextArea,
    MDBBtn,
} from "mdb-react-ui-kit";

// Import redux modules
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todos';
import { useState } from 'react';

// A component to add todo list items
function AddTodo()
{
    // Use dispatch to allow redux add action
    const dispatch = useDispatch();

    // Create a state to set the input value
    const [input, setInput] = useState('');

    return (
        <div className="d-flex justify-content-center align-items-center mb-4">
            <MDBTextArea
                label="What do you need to do today?"
                rows={4}
                wrapperClass="flex-fill"
                value={input}
                onChange={ (e) => setInput(e.target.value) }
            />
            <MDBBtn onClick={() => dispatch(addTodo(input))} size="lg" className="ms-2">
                Add
            </MDBBtn>
        </div>
    );
}

export default AddTodo;