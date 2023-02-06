import { useState } from "react"

const StudentCard = ({ student }) => {
    return (
        <tr>
           <td>{student.name}</td>
           <td>{student.user === null ? "------" : student.user.name}</td>
           <td>{student.age}</td>
           <td>{student.immortal_house}</td>
           <td>{student.level}</td>
           <td>"MERITS"</td>
        </tr>
    )
}

export default StudentCard