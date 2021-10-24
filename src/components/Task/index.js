import React from "react";

const Task = ({name, date, status, time }) => {

    return(
        <div className="container-fluid">
            {time} {name} {date} 
        </div>         
    )
}
export default Task;