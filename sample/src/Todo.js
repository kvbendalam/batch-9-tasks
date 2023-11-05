import React, { useEffect, useState } from 'react';

const Todo = () => {
    const LOCAL_STORAGE_KEY = "list";
    let initalValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    const [list, setList] = useState(initalValue)
    const [massage, setMassage] = useState({
        text: "",
        id: "",
    });
    const [editingItem, setEditingItem] = useState({
        id: "",
        isEditing: false,
    });

    useEffect(() => {
        console.log("Retrieving data from local storage...");
        const retrievedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrievedList) {
            console.log("Data retrieved successfully:", retrievedList);
            setList(retrievedList);
        }
    }, []);

    useEffect(() => {
        console.log("Saving data to local storage...");
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
        console.log("Data saved successfully:", list);
    }, [list]);


    const changeMassage = (e) => {
        setMassage({
            ...massage,
            text: e.target.value,
        })
    }


    const handleSabmit = (event) => {
        event.preventDefault();
        let newTodo = {
            text: massage.text,
            id: new Date().getTime().toString(),
        }
        setList([...list, newTodo]);
        setMassage({
            text: "",
            id: ""
        })
    }
    const handleDelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id;

        })
        setList(newTodos);
    }




    const changeEditState = (id) => {
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true,
        });
        let editbleItem = list.find((eachItem) => eachItem.id === id);
        setMassage({
            ...massage,
            text: editbleItem.text,
            id: editbleItem.id,
        })

    }

    const handleEdit = (e) => {
        e.preventDefault();
        let newTodos = list.map((eachItem) => {
            if (eachItem.id === editingItem.id) {
                return {
                    text: massage.text,
                    id: editingItem.id,
                };
            } else {
                return eachItem;
            }
        });
        setList(newTodos);
        setMassage({
            text: "",
            id: "",
        });
        setEditingItem({
            id: "",
            isEditing: false,
        });
    }







    return (

        <div>
            <form className='todo'>
                <input type='text' placeholder='enter task' value={massage.text} onChange={changeMassage} />
                {editingItem.isEditing ? (<button onClick={handleEdit}>Edit</button>) : (<button onClick={handleSabmit}>Add</button>)}
            </form>
            <hr />
            {list.length === 0 && <h3>there is no list</h3>}
            < ul className='list' >
                {
                    list.map((eachItem) => {
                        const { text, id } = eachItem;
                        return (
                            <li key={id}>
                                <span> {text}      </span>

                            </li>

                        )
                    })
                }


            </ul>
        </div>


    )

};
export default Todo