import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
const [EditMode, setEditmode] = useState(false);
const [Value,setValue] = useState("Double click to edit...");

    return(
        <Draggable>
            {
        EditMode ?
        ( <input 
            onDoubleClick={(e) => setEditmode(false)} 
            value={Value} 
            onChange={e => setValue(e.target.value)}/>
    ):(
               <h1  onDoubleClick={(e) => setEditmode(true)}>
                {Value}</h1>
    )}
        </Draggable>
    )
}

export default Text;