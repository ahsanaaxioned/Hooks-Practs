import React,{useState} from 'react';

const FunctionalHooks = ()=> {
 const [counter, setcounter] = useState(0)
  return (
    <div className="clsshooks">
        <p className="para">the number of subscribers are {counter} from  Functional Components</p>
        <button className="btn" onClick={()=>setcounter(counter + 1)}>Subscribe Us</button>
    </div>
  );
}

export default FunctionalHooks;