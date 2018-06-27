import React from 'react';
let country=(p)=>{
    return <div>
      <h1>{p.selected.name}</h1>
      <img src={p.selected.flag} alt={p.selected.name}/>
    </div>
};

export default country;