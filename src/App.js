import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Day from './components/Day';
import Task from './components/Task';


function App() {
  const tasks = [{name:"Task 1", date:"30.10.2021", time:"14:00", status:"done"}, 
                {name:"Task 2", date:"28.10.2021", time:"12:30", status:"done"}, 
                {name:"Task 3", date:"28.10.2021", time:"12:50", status:"done"},
                {name:"Task 4", date:"27.10.2021", time:"12:00", status:"done"}]
  const days = ["12.10.2021", "13.10.2021","14.10.2021"];

  let curr = new Date();
  let week = []

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toLocaleDateString()
    week.push(day)
  }

  return (
    <div className="App">
      <div className="row">
      <table width="100%" cellspacing="0" border="1" >    
        <tr>
        <th>План</th>        
        <th>Пн {week[0]}</th>
        <th>ВТ {week[1]}</th>
        <th>СР {week[2]}</th>
        <th>ЧТ {week[3]}</th>
        <th>Пт {week[4]}</th>
        <th>СБ {week[5]}</th>
        <th>ВС {week[6]}</th>
      </tr> 
      <tr>
          <th>
            </th>               
                    
      {week.map(d=>( <td><Day date={d} tasks={tasks}></Day></td>) )}
        
   </tr>
     
   </table>
    
      </div>
      <button onClick >След.неделя-</button>
  
    </div>
  );
}

export default App;
