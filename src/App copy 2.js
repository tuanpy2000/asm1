import './App copy 2.css';
import React ,{ Component } from 'react';
import ToDoList from './component/ToDoList/index copy 2';

  export default class App extends Component{
    constructor(props){
      super(props);
      this.state={
        items:[{
          name: '',
          date: ''
          
        }
       
      ],
      nameText:'',
      dateValue:''
      };
      this.deleteItem=this.deleteItem.bind(this)

    }

    handleNameChange=(e)=>{
      this.setState({
        nameText: e.target.value
      })
    }

    handleDateChange=(e)=>{
      this.setState({
        dateValue: e.target.value
      })
    }

    onSubmit =()=>{
      this.setState({

        items:[
          
          ...this.state.items,{
            name: this.state.nameText,
            date:this.state.dateValue,
          
          }
        ]
      })

    }
    deleteItem(name){
      const filteredItems = this.state.items.filter(item=>
        item.name!==name);
        this.setState({
          items:[filteredItems
          ]
        })
    }

    render(){
      console.log(`Rerender at ${new Date()}`)
  return (
    <div className="App">
      <div>
        <h1>New Task</h1>
        <label>Name</label>
        <input className='name' value={this.state.items.name} onChange={this.handleNameChange}>
        
        </input>
        <label>Deadline</label>
        <input type='date' className='date' onChange={this.handleDateChange}>
        </input>
        <p>Priority</p>
        <div>
          <input type='radio' name='priority-check' id='high-check'></input>
          <label>High</label>
        </div>
        <div>
          <input type='radio' name='priority-check' id='medium-check'></input>
          <label>Medium</label>
        </div>
        <div>
          <input type='radio' name='priority-check' id='low-check'></input>
          <label>Low</label>
        </div>
        <div>
          <button onClick={this.onSubmit}>Submit
          </button>
        </div>
      </div>
      <div>
        <h1>List task</h1>
        {this.state.items.map(item=>{
          return(
              <ToDoList
              name={item.name}
              date={item.date}
              deleteItem={this.deleteItem}
              />
              )
              
            } )}

      </div>  
    </div>
    
  );
}}


