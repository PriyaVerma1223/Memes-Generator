import React,{ createRef, useState } from "react";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage = () => {
const [params] = useSearchParams();
const [Count, setCount] = useState(0);
const memeRef = createRef();

const AddText = () => {
  setCount(Count + 1)
}

    return(
    <div>
        <div style={{width:"700px", border:"1px solid", height:"270px"} } ref={memeRef} className="meme mt-5 mb-5">
   <img src={params.get(`url`)} width="250px" />
   {
    Array(Count).fill(0).map(e => <Text />)
   }
   </div>
   <button onClick={AddText}>Add Text</button><br />
   <button variant="Success" onClick={e => exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
  )
}

export default EditPage