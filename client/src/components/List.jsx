import React from 'react'
import {Table} from 'react-bootstrap'

const List = props => {
    var closings = [];
    var yesterday = 0;
    var difference = 0;
    var style = 'red';
    for(var dates in props.current.bpi){
        difference = props.current.bpi[dates] - props.current.bpi[yesterday] || 0;
        if(difference > 0){
            style = 'green';
        } else {
            style = 'red';
        }
        closings.unshift({date: dates, value: props.current.bpi[dates], difference: difference, style: style})

        yesterday = dates;
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