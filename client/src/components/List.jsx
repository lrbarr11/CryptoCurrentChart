import React from 'react'
import {Table} from 'react-bootstrap'

const List = props => {
    var closings = [];
    var yesterday = 0;
    var difference = 0;
    var date;
    var style = 'red';
    for(var increment=1; increment < props.current.length; increment++){
        difference = props.current[increment].close - props.current[yesterday].close;
        if(difference > 0){
            style = 'green';
        } else {
            style = 'red';
        }
        date = new Date(props.current[increment].time * 1000);
        date = date.toDateString()

        closings.unshift({date: date, value: props.current[increment].close, difference: difference, style: style})

        yesterday = increment;
    }
    console.log('list: ', closings)
    
    return (
       
        <Table>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope='col'>Closing Value</th>
                    <th scope="col">Difference</th>
                </tr>
            </thead>
            <tbody>
            {closings.map((closing) =>{
                return (
                <tr>
                    <th>{closing.date}</th>
                    <th>{closing.value}</th>
                    <th style={{color: closing.style}}>{closing.difference}</th>
                </tr>
                )
            })}
            </tbody>
        </Table>
       
    )
}

export default List