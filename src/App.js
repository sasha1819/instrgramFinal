import React from 'react'
// import SignUpForm from './componets/SignUpForm'
import Storys from './storys/Stories';
import Landing from './componets/Landing'
import Main from './componets/main/Main';

function App() {
  return (
    <div>
      <Landing/>
      {/* <SignUpForm />  */}
      <Storys/>
      <Main/>
    </div>
  )
}

export default App
