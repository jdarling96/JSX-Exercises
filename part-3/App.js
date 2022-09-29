const App = () => {
    return (
        <div>
            <Person name="Josh" age={19} hobbies={["Gaming", "Netflix", "Fitness"]} />
            <Person name="Rachel" age={17} hobbies={["Biking", "Reading", "fitness"]} />
            <Person name="Michaelangelo" age={32} hobbies={["Mecahnic", "netflix", "Bird Watching"]} />
            
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById("root"))