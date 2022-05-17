import Table from "react-bootstrap/esm/Table";
import Navigation from "./Navigation";
import Container from "react-bootstrap/esm/Container"
import {useEffect, useState} from "react"
import list from './list_data.js'


export default function Horniest(){

    const data = list.horniest
    const temp = [1,2,3,4,5]
    console.log(temp)
    return(
        <div>
            <Navigation/>
            <Container>
                <h2>Horniest</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    { temp.map((idx) => 
                            <tr key = {idx}>
                                <td>Marie</td>
                                <td>Marie</td>
                                <td>Marie</td>
                                <td>Marie</td>
                                <td>Marie</td>
                            </tr>
                        ) 
                    }
                    </tbody>
                </Table>
                <h5>
                </h5>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                            <th>
                                Horny
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    { temp.map((idx) => 
                            <tr key = {idx}>
                                <td>RocketMan</td>
                                <td>RocketMan</td>
                                <td>RocketMan</td>
                            </tr>
                        ) 
                    }
                    </tbody>
                </Table>
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
                                <td>{idx+3}</td>
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