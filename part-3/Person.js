const Person = ({name, age, hobbies}) => {
    let allowedName;
    let vote;
    const num = 8
    if(age >= 18) {
        vote = <h3>Please go vote!</h3>
    } else {
        vote = <h3>You must be 18</h3>
    }
    if(name.length > num) {
        allowedName = <h3>{name.slice(0, num - 2)}-</h3>
    } else{
        allowedName = <h3>{name}</h3>
    }
    return (
        <div> 
        <p>Learn some information about this person</p>
        {vote}
        {allowedName}
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(h => 
                (
                    <li>
                        <b>{h}</b>
                    </li>
                ))}
        </ul>
        </div>
    )
}