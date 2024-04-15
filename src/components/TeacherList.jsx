import React from 'react'
import '../styles/teacherList.css';

const teachers =[
    {
        image:"image",
        name: "prof teacher 1",
        duration: "20 hours lesson",
        cost: "100"
    },
    {
        image:"image",
        name: "prof teacher 1",
        duration: "20 hours lesson",
        cost: "100"
    },
    {
        image:"image",
        name: "prof teacher 1",
        duration: "20 hours lesson",
        cost: "100"
    }
]

function TeacherList() {
  return (
    <div className='teacher--list'>
      <div className='list--header'>
        <h2>Teachers</h2>
        <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
        </select>
      </div>

      <div className='list--container'>
        {teachers.map((teacher) => (
            <div className='list'>
                <div className='teacher--detail'>
                    <h2>{teacher.name}</h2>
                </div>
                <span>{teacher.duration}</span>
                <span>{teacher.cost}</span>
                <span className='teacher--todo'>:</span>
            </div>
        ))}
      </div>

    </div>
  )
}

export default TeacherList
