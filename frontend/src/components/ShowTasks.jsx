import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateTask } from "./UpdateTask";
import { TaskCard } from "./TaskCard";

export function ShowTasks() {
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("https://task-api-iq60.onrender.com/api/task").then((response) => {
            setTasks(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }
    , []);


    function handleEdit(e) { 
        setId(e.target.name); 
        setOpen(true);
    }

    function handleUpdate() { 
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleClose() { 
        setId("");
        setOpen(false);
    }

    function handleDelete(e) {
        axios.delete(`https://task-api-iq60.onrender.com/api/task/${e.target.name}`);
        setTasks((data) => {
            return data.filter((task) => task._id !== e.target.name);
        });
    }

    // console.log(tasks);
    return (
        <section className="container">
            <div className="heading">
                <h1>TASKS</h1>
                <Link to="/create-task" className="button-new">
                    <button className="button">New</button>
                </Link>
            </div>
            <section className="contents">
                <ul className="list-container">
                    {tasks.map((data) => (
                        <TaskCard
                            data={data}
                            key={data._id}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </section>
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateTask
                            _id={id}
                            handleClose={handleClose}
                            handleEdited={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}
