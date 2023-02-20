import React, { useState } from 'react';

const Event = ()=> {
    const [text,settext] = useState('Enter Text Here');

 const onclickhnage = (e)=>settext(text.toUpperCase())
 const onChangeHandler = (e)=>settext(e.target.value)


const onFocusHndler = (e)=>{
    settext("")
 }

  return (
    <div className="clsshooks">
        <form action="#FIXME" method='post' name='form'>
            <input type="text" name='name' value={text} onChange = {onChangeHandler} onFocus= {onFocusHndler}/>
        </form>
        <button className="btn2" onClick={onclickhnage} >To Uppercase</button>
    </div>
  );
}

export default Event;