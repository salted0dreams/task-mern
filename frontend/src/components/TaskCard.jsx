// import { checkPropTypes } from "prop-types";


export function TaskCard({data, key, handleDelete, handleEdit}) {
    const { _id, title, description } = data;
    return (
        <li key={key}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button name={_id} className="button" onClick={handleEdit}>
                    edit
                </button>
                <button name={_id} className="button" onClick={handleDelete}>
                    delete
                </button>
            </div>
        </li>
    );
}