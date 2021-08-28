import React from 'react';
import './styles.css'

const UserContext = React.createContext({name: "Bruno Bertolini"});

class UserProfile extends React.Component{
  static contextType = UserContext;
  render(){
    return <div>{this.context.name}</div>
  }
}

export default function App() {
  return (
    <UserContext.Provider value={{name: "arronja drado"}}>
    <div className="App">
      <UserProfile />
    </div>

    </UserContext.Provider>     

  );
}
