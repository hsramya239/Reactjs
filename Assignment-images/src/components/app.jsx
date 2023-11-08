import { Component } from "react";
import axios from "axios"
class App extends Component{
    state={
        users:[]
    }
    componentDidMount(){
        axios.get("https://reqres.in/api/users?/page=2")
        .then(res=>this.setState({users:res.data.data}))
        .catch(err=>console.log("ERROR",err))
    }
    render() {
      return (
        <div>
          <h1>Ajax | API call</h1>
          <hr />
          <ol>
            {this.state.users.map((val, index) => (
              <li key={val.id} style={{ backgroundColor: index % 2 === 0 ? 'red' : 'green' }}>
              <img src={val.avatar} alt="avatar" width="60" />
              </li>
            ))}
          </ol>
        </div>
      );
    }
  

    // render() {
    //     return (
    //       <div>
    //         <h1>Ajax | API call</h1>
    //         <hr />
    //         <ol>
    //           {this.state.users.map((val, index) => (
    //             <li key={val.id} className={index % 2 === 0 ? 'even-image' : 'odd-image'}>
    //               <img src={val.avatar} alt="avatar" width="60" />
    //             </li>
    //           ))}
    //         </ol>
    //       </div>
    //     );
    // }  
      
}
 
export default App;