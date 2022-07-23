import React, {useState} from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Forward() {

    const [input1, textbox1] = useState("");

    const navigate = useNavigate();


    const reactButton = () => {
        navigate('/search', {state: {user_id:input1}});
    };

    return (
        <div><label>Input 1</label>
        <input type="text" onChange={(e)=> { textbox1(e.target.value); }}/>
            <go onClick={reactButton}>Add</go>
        </div>


);
}