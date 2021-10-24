import React from "react";
import Task from "../Task";

const Day = ({name, date, tasks}) => {
    console.log(tasks);
    return(
        <div className="col-md">
            <div className="row">
            {
                tasks.filter(task=>task.date==date).map(t=>(
                    <Task name={t.name} time={t.time} status={t.status}></Task>
                ))
            }
        </div>
        </div>          
    )
}
export default Day;