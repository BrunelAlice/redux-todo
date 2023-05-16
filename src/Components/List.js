// Import style from MDB
import
{
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

// Import use selector to import states
import { useSelector } from 'react-redux';

// Import components
import EditTodo from "./EditTodo";
import MarkCompleted from "./MarkCompleted";
import RemoveTodo from "./RemoveTodo";

// A component to render the todo list
function List()
{
    // Select todo state
    const todoItem = useSelector((state) => state.todos);
    let allContent = [];

        // Create an array of list item that will be rendered in List
        for (let i = 1; i < todoItem.nextId; i++)
        {
            // Check first if item exists
            if (todoItem.data[i] !== undefined)
            {
            allContent.push(
                <>
                    <div className="d-flex align-items-center">
                        <MarkCompleted id={i} completed={todoItem.data[i].completed }/>
                        {todoItem.data[i].content}
                    </div>
                    <EditTodo id={i} />
                    <RemoveTodo id={i} />
                </>
                );
            }
        }

    // Render complete list
    return (
        <MDBListGroup className="mb-0">
            {allContent.map((item, id) => <MDBListGroupItem className="d-flex  align-items-centerborderstart-0bordertop-0 border-end-0 border-bottom rounded-0 mb-2" key={id}>{item}</MDBListGroupItem>)}
        </MDBListGroup>
);
}

export default List;