import React, { useEffect, useState } from 'react'
import './css/asm3.css'

export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useEffect([])
  const [change, setChange] = useEffect('')

  useEffect(() => {
    getUserData();
  })

  useEffect(()=>{
    setSearch(
      data.filter(item => {
      return  item.login.toLowerCase().includes(change.toLowerCase())
      })
    )
  },[search,data])

  async function getUserData() {
    const api = 'https://api.github.com/users';
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  return (
    <div>
      <div>
        <div className='search-input'>
          <label>Input Name</label>
          <input placeholder='Search' onChange={e=>setChange(e.target.value)}></input>
        </div>
        {data.map(item => (
          <div key={item.id}>
            <p>Name: {item.login}</p>
            <img src={item.avatar_url} style={{ width: 200, height: 200 }} />
          </div>
        ))}
      </div>

    </div>
  )
}


// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       people: [],
//       allPeople: [],
//     };
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//   }

//   getUserData = () => {
//     return axios.get('https://api.github.com/users')
//   }

//   handleFilterTextChange(e) {
//     const post = this.state.allPeople.filter(item =>
//       item.login.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     this.setState({
//       people: post
//     })
//   }

//   componentDidMount() {
//     this.getUserData()
//       .then(response => {
//         this.setState({
//           people: response.data,
//           allPeople: response.data
//         }
//         )
//       }).catch(error => {
//         console.log(error)
//       })
//   }

//   render() {
//     return (
//       <div>
//         <div className='search-input'>
//           <label>Input Name</label>
//           <input placeholder='Search' onChange={this.handleFilterTextChange}></input>
//         </div>

//         {this.state.people.map((person) =>
//         (
//           <div className='people-info' key={person.id}>
//             <div><p>
//               Name: {person.login}
//             </p>
//               <p>
//                 Role: {person.type}
//               </p>
//             </div>
//             <div><img src={person.avatar_url}></img></div>
//           </div>)
//         )
//         }
//       </div>
//     )
//   }
// }
