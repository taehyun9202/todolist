import React from 'react';

const TabDetail = props =>{
    return (
        <textarea className="textbox" cols="40" rows="10" placeholder={props.tab.text}></textarea>
    )
}

export default TabDetail;   