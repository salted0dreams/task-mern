
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export function  CreateTask() {
    const [data, setData] = useState({ title: "", description: "" });
    const navigate = useNavigate();

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const task= {
            title: data.title,
            description: data.description,
        };

        console.log({ task });
        axios
            .post("http://localhost:5000/api/task", data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TASK");
                console.log(err.message);
            });
        
        navigate("/");
    }

    return (
        <section className="container">
            <Link to="/" className="button-back">
                <button type="button" className="button">
                    back
                </button>
            </Link>
            <section className="contents">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate
                >
                    <label className="label" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit" className="button" >
                        create tasks
                    </button>
                </form>
            </section>
        </section>
    );
}