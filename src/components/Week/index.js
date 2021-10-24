import React from "react";

const Week = () => {
    
  let curr = new Date();
  let week = []
    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = new Date(curr.setDate(first)).toLocaleDateString()
        week.push(day)   
   }
    return(
        <div className="container-fluid">
           <table width="100%" cellspacing="0" border="1" >    
            <tr>
                <th>Пн {week[0]}</th>
                <th colspan="3">ВТ {week[1]}</th>
                <th colspan="3">СР {week[2]}</th>
                <th colspan="2">ЧТ {week[3]}</th>
                <th colspan="3">Пт {week[4]}</th>
                <th colspan="3">СБ {week[5]}</th>
                <th colspan="2">ВС {week[6]}</th>
              </tr> 
            </table>
    
        </div>         
    )
}
export default Week;