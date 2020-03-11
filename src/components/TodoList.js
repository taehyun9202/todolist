import React, { useState } from 'react';

const todoList = []

const TodoList = () => {
    
    // const enterValue = event => {
    //     setBox({
    //         ...formState,
    //         [event.target.name]: event.target.value
    //     });  
    // }
    
    const [list, setList] = useState("");
    const [lists, setLists ] = useState(todoList); 

    const addList = event => {
        event.preventDefault();
        let newList = {list, completed: false};
        setLists([...lists  ,newList]);
        
    }
    const checkList = i => {

        let temp = [...lists];
        temp[i].completed = !temp[i].completed;
        setLists(temp);
        
        // let getlist = document.getElementsByName ("checkbox");
        // let isChecked = getlist.checked;    
        // // let isnotChecked =! getlist.checked;
        // setList(todoList[i]);
        // {isChecked ? todoList.completed = true : todoList.completed = false } 
        // console.log(isChecked)
    }
    const deleteList = i => {
        let temp = [...lists];
        temp.splice(i,1);
        setLists(temp);
    }
    return(
        <div>
            <row className="row">
                <form onSubmit={addList}>
                <p>Enter Todo List &nbsp;<input type="text" name="list" onChange={ event =>setList(event.target.value)}/></p>
                <input type="submit" value="Add!"/>
                </form>
            </row>
            <row className="row">
                <table>
                {lists.map((list,i)=>
                
                <tr key = {i} className={list.completed?"have":""}>
                    <td>{list.list}</td>
                    {list.completed ?
                    <td key = {i}><input type="checkbox" name="checkbox" onChange={e => checkList(i)}/></td>:
                    <td key = {i}><input type="checkbox" name="checkbox" onChange={e => checkList(i)}/></td>}
                    <td key = {i}><button type="submit" onClick={e => deleteList(i)}>Delete</button></td>
                </tr>
                
                )}
                
                </table>
            </row>
        </div>    
    )
    
}

export default TodoList