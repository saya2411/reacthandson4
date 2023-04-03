import React from 'react'
import Nav from './Nav'

function Student() {
    
  return (
    <div className="App">
         <Nav/>
        <h1  className='margin-left'>Student</h1>
        <table border={1} className='margin-left'>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </thead>
            <tbody>
            <tr>
                    <td>Kim</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    {/* <td><a href='#' />Edit</td> */}
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Song</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Kang</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Choi</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>Dec</td>
                    <td>Edit</td>
                    
                </tr>
            </tbody>

        </table>
        </div>
  )
}

export default Student