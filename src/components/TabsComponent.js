import React, { useState } from 'react';
import TabsDetail from './TabsDetail';
const listofText = [
    {tab:"Tab1", text:"Tab1 content is shwoing here!"},
    {tab:"Tab2", text:"Tab2 content is shwoing here!!"},
    {tab:"Tab3", text:"Tab3 content is shwoing here!!!"}]

const TabsComponent = () => {
    
    // const enterValue = event => {
    //     setBox({
    //         ...formState,
    //         [event.target.name]: event.target.value
    //     });  
    // }
    const [filter, setFilter] = useState({});
    // const [text, setText] = useState("");
    // const [texts, setTexts ] = useState(listofText); 

    // const addText = event => {
    //     event.preventDefault();
    //     let newText ={text};
    //     setTexts([...texts  ,newText]);
    // }
    const displayTab = i => {
        setFilter(listofText[i]);
    }
    return(
        <div>
            {/* <row className="row">
                <form onSubmit={addText}>
                <p>Enter Text &nbsp;<input type="text" name="text" onChange={ event =>setText(event.target.value)}/></p>
                <input type="submit" value="Add!"/>
                </form>
            </row> */}
            <row className="row">
                {listofText.map((text,i)=>
                    <button className="btn" onClick = {e => displayTab(i)}>{text.tab}</button>
                )}  
                
            </row>
            <row className="row">
                
            <TabsDetail tab={filter} />
            </row>
        </div>    
    )
    
}

export default TabsComponent