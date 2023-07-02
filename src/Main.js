import React, {Component} from 'react';
import resumeData from './AllData'
import './index.css'

export default class Main extends Component
{ 
    render()    
    { 
        return(
            <div className = "Main">
            <div className = "container">
            <h1>This is {resumeData.name}</h1>
            <p>{resumeData.role}. {resumeData.aboutme}</p>
            </div>
            </div>
        )
    }
}