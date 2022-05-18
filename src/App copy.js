import './App.css';
import React ,{ Component } from 'react';
import OddChecker from './OddChecker';
import BranchItem from './component/BranchItem';

  export default class App extends Component{
    constructor(props){
      super(props);
      this.state={
        items:[{
          name: 'Honda',
          price: 100
        },
        {
          name: 'Yamaha',
          price: 50
        },
        {
          name: 'Suzuki',
          price: 30
        }
      ],
      branchText:'',
      priceValue:''
      };
    }

    increaseCounter=()=>{
      this.setState({
        counter: this.state.counter +1
      })
    }

    decreaseCounter=()=>{
      this.setState({
        counter: this.state.counter -1
      })
    }

    handleBranchChange=(e)=>{
      this.setState({
        branchText: e.target.value
      })
    }

    handlePriceChange=(e)=>{
      this.setState({
        priceValue:+e.target.value
      })
    }

    onSubmit =()=>{
      this.setState({

        items:[
          
          ...this.state.items,{
            name: this.state.branchText,
            price:this.state.priceValue
          }
        ]
      })
    }

    render(){
      console.log(`Rerender at ${new Date()}`)
  return (
    <div className="App">
      <div>
        <input className='branch' onChange={this.handleBranchChange}>
        
        </input>
        <input className='price' onChange={this.handlePriceChange}>
        </input>
        <div>
          <button onClick={this.onSubmit}>Submit

          </button>
        </div>
        {this.state.items.map(item=>{
          return(
              <BranchItem
              name={item.name}
              price={item.price}
              />
          )
          
           } )}
      </div>  
    </div>
    
  );
}}


