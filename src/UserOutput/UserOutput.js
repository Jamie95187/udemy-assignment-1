import React from 'react';

const userOutput = (props) => {
  return(
    <div className='userOuput'>
      <p>UserName: {props.userName}</p>
      <p>Quick On the Draw</p>
      <p>What Am I, Chopped Liver?</p>
      <p>Meaning: A rhetorical question used by a person who feels
        they are being given less consideration than someone else.</p>
    </div>
  )
}

export default userOutput;
