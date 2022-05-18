import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/asm3.css'
// export default function App () {
//   const [data, setData] = useState(null)
//   useEffect(async() => {
//     const response = await getUserData()
//     console.log(response)
//     setData(response.data)
//   },[])

//   const getUserData=()=>{
//     return axios.get('https://api.github.com/users/ma')
//   }

//   return (
//     <div>
//       <div>
//         <img src={data?.avatar_url} style={{width:100, height:100}}/>
//       </div>

//     </div>
//   )
// }


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      allPeople: [],
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  getUserData = () => {
    return axios.get('https://api.github.com/users')
  }

  handleFilterTextChange(e) {
    const post = this.state.allPeople.filter(item =>
      item.login.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      people: post
    })
  }

  componentDidMount() {
    this.getUserData()
      .then(response => {
        this.setState({
          people: response.data,
          allPeople: response.data
        }
        )
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <div className='search-input'>
          <label>Input Name</label>
          <input placeholder='Search' onChange={this.handleFilterTextChange}></input>
        </div>

        {this.state.people.map((person) =>
        (
          <div className='people-info' key={person.id}>
            <div><p>
              Name: {person.login}
            </p>
              <p>
                Role: {person.type}
              </p>
            </div>
            <div><img src={person.avatar_url}></img></div>
          </div>)
        )
        }
      </div>
    )
  }
}
