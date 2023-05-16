// Import style from MDB
import
{
        MDBCard,
        MDBCardBody,
        MDBCol,
        MDBContainer,
        MDBRow,
} from "mdb-react-ui-kit";


// Import components
import List from './Components/List';
import AddTodo from './Components/AddTodo';



function App()
{


    // Render page content
    return (
        <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol xl="10">
                        <MDBCard style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-5">
                                <h6 className="mb-3">Simple Redux Todo List</h6>
                                <AddTodo />
                                <List/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default App;
