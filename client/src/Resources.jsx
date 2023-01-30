import React, { useState, useEffect } from 'react';
import Nav from "./Nav"
import "./Res.css"

function DataList(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:5000/resources");
                const data = await response.json();
                console.log(data)
                setData(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    const filteredData = data.filter(item => item.subject === props.subject && item.type === props.type);

    return (
        <>
            <Nav />
            <div className="respage">
                <div className="listOfResources ">
                <h3>Content</h3>
                    <div>
                        {filteredData.map(item => (
                            <>
                                <div className='resource-card ' key={item._id}>
                                    <a target="_blank" rel="noreferrer" href={item.link}>{item.title}</a>
                                </div>
                                <hr />
                            </>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataList;