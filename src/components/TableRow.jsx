import React from 'react'

export default function TableRow(props) {
    console.log(props)
    return (
        <tr>
            <td>{props.index+1}</td>
            <td>{props.item.name}</td>
            <td>$ {props.item.price}</td>
            <td><button className='btn btn-danger' onClick={()=>props.Delete(props.item)}>DELETE</button></td>
        </tr>
    )
}
