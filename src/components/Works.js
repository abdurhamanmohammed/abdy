import React from 'react'
import "./workstyle.css"
import pro4 from "../assets/pro4.jpg"
function Works() {
  return (
    <div className='works'>
        <h1>my recent works</h1>
        <div className='wone'>
            <div className='wtwo'>
                <div className='wthree'><img src={pro4}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            <div className='wtwo'>
                <div className='wthree'><img src={pro4}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            <div className='wtwo'>
                <div className='wthree'><img src={pro4}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            <div className='wtwo'>
                <div className='wthree'><img src={pro4}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
        </div>
    </div>
  )
}

export default Works