import React, { Component, useState } from 'react'

export default class App  extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleShowAlert = () => {
        let {counter} =this.state
        console.log("show alert with counter:", this.state.counter);
        setTimeout(() => {
            alert(counter)
        }, 3000)
    }

    render() {
        const { counter } = this.state;
        console.log("render with counter:", counter);
        return (
            <div>
                <p>
                    Hello{counter}
                </p>
                <h1
                    style={{borderWidth: 1, backgroundColor:"red"}}
                    onClick={()=> this.setState({counter: counter+1})}
                >
                    Add
                </h1>
                <button onClick={this.handleShowAlert}>Show value Counter</button>
            </div>
        )
    }
}

// export default function App () {
//     const [counter, setCounter] = useState(0)
//     const handleShowAlert = () => {
//         console.log("show alert with counter:", counter);
//         setTimeout(() => {
//             alert(counter)
//         }, 3000)
//     }
//     return (
//         <div>
//             <p>
//                 Hello{counter}
//             </p>
//             <h1
//                 style={{ borderWidth: 1, backgroundColor: "red" }}
//                 onClick={() => setCounter( counter + 1 )}
//             >
//                 Add
//             </h1>
//             <button onClick={handleShowAlert}>Show value Counter</button>
//         </div>
//     )
//}

