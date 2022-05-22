import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tool from './Tool';
import './Tools.css'


const Tools = () => {
    const [tools, setTools] = useState([]);
    // const navigate = useNavigate();

    useEffect (() =>  {
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div id='toolsItem' className='container my-5'>
        <h2 className='text-center text-uppercase'> Leptop Tools parts</h2>
         <div className='toolsItem-container'>

        {
            tools.map(tool => <Tool
                key={tool}
                tool = {tool}
            ></Tool>)
        }

         
         </div>

    </div>
    );
};

export default Tools;

