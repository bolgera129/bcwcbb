import Table from "react-bootstrap/esm/Table";
import Navigation from "./Navigation";
import Container from "react-bootstrap/esm/Container"
import {useEffect, useState} from "react"
import list from './list_data.js'


export default function Homophobes(){

    const data = list.homophobes

    return(
        <div>
            <Navigation/>
            <Container>
                <h2>Homophobes</h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Comments</th>
                    </tr>
                </thead>
                    <tbody>
                    { data.map((person,idx) => 
                            <tr key = {idx}>
                                <td>{idx+1}</td>
                                <td>{person.name}</td>
                                <td>{person.comments}</td>
                            </tr>
                        ) 
                    }
                    </tbody>
            </Table>
            </Container>
        </div>
    )
}