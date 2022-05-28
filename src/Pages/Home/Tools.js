import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tool from './Tool';
import './Tools.css'


const Tools = () => {
    const [tools, setTools] = useState([]);
    // const navigate = useNavigate();

    useEffect (() =>  {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='container my-5'>
        <h2 className='text-center text-uppercase text-3xl'> Leptop Tools parts</h2>
         <div className='toolsItem-container'>

        {
            tools.slice(-6).map(tool => <Tool
                key={tool.id}
                tool = {tool}
            ></Tool>)
        }

         
         </div>

    </div>
    );
};

export default Tools;

