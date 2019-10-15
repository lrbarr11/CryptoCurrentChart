import React from "react"


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weekly: [],
            daily: [],
            hourly: []
        }
    }

    render() {
        return (
            <div>
                hello world from render
            </div>
        )
    }
}

export default App;