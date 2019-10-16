import react from 'react'
import {table, thead, tr, th, tbody} from 'react-bootstrap'

function List(props) {
    var closings = [];
    for(var dates in props.current){
        closings.unshift({date: dates, value: props.current[dates]})
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">date</th>
                    <th scope='col'>closing value</th>
                </tr>
            </thead>
            <tbody>
            {closings.map((closing) =>{
                return (
                <tr>
                    <th>{closing.date}</th>
                    <th>{closing.value}</th>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default List