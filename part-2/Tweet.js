const Tweet = ({username, name, date, message}) => {
    const dateToString = date.toDateString()

    return (
        <div>
            <h1>{username}</h1>
            <h2>{name}</h2>
            <p>{message}</p>
            <b>{dateToString}</b>
        </div>
    )

}