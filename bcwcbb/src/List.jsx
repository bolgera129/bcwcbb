import Table from "react-bootstrap/Table"
import {useParams} from 'react-router-dom'

export default function List(data){

    let { id } = useParams();
    console.log(id)
    

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Comments</th>
                    </tr>
                </thead>
                    <tbody>
                    { data.map(person => 
                            <tr>
                            <td>{person.rank}</td>
                            <td>{person.name}</td>
                            <td>{person.comments}</td>
                        </tr>
                        ) 
                    }
                    </tbody>
            </Table>
            </div>
    )
}