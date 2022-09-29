const App = () => {
   
return (  
    <div>
        <Tweet username="billybob55" name="billy" message="My first ever tweet" />
        <Tweet username="theman11" name="jimmy" message="React is so cool" />
        <Tweet username="valleygirl101" name="Jessica" message="Its my natural voice" />
    </div>
   )

}

ReactDOM.render(<App />, document.getElementById("root"))