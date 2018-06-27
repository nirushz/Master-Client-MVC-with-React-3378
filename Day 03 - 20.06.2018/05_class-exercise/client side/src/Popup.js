import React from 'react';
let popup=(p)=>{
    return <div className="pop">
        <p>Are u sure u want {p.choice}</p>
        <button onClick={p.confirm}> OK </button>
        <button onClick={p.cancel}> CANCEL </button>
    </div>
};

export default popup;