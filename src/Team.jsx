import { useState } from "react"


export default function Team(){
    const [team, setTeam] = useState(11);

    const handelAddPlayer = () =>{
       const newTeam = team + 1;
       setTeam(newTeam)
    }

    const handelRemovePlayer = () =>{
        const newTeam = team - 1;
        setTeam(newTeam)
     }


    const teamStyle = {
        border: ' 2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }
 
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handelAddPlayer}>Add</button>
            <button onClick={handelRemovePlayer}>Remove</button>
        </div>
    )
}