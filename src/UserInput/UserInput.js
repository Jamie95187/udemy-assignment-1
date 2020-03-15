import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <button onClick={props.switchDef}>Switch</button><br/>
      <input type='text' id='userName' onChange={props.change}/>
    </div>
  )
};

// class UserInput extends Component {
//
//   render(){
//     return(
//     <div>
//       <input>
//       </input>
//     </div>
//     )
//   }
//
// }

export default UserInput;
