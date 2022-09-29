const App = () => {
    const newDate = new Date()
   
return (  
    <div>
        <Tweet username="billybob55" name="billy" message="My first ever tweet" date={newDate}/>
        <Tweet username="theman11" name="jimmy" message="React is so cool" date={newDate}/>
        <Tweet username="valleygirl101" name="Jessica" message="Its my natural voice" date={newDate}/>
    </div>
   )

}

ReactDOM.render(<App />, document.getElementById("root"))