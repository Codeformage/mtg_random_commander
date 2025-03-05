import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";


export function TestFetchData() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000");
        setData(response.data.blogPost);
    };

    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <>
        <ul className="list bg-base-100 rounded-box shadow-md">
            
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Blog backend</li>
            {data.map((blog, index) => (
                <li key={index} className="list-row">
                    <div className="text-4xl font-thin opacity-50 tabular-nums">{index}</div>
                <div className="list-col-grow">
                <div>{blog.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60 skeleton">{blog.content}</div>
                </div>
                <button className="btn btn-square btn-outline">
                    Like
                </button>
                </li>
                ))
            }
        </ul>
        </>
    )
}
export default TestFetchData;