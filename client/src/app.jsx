import React from "react"
import axios from "axios"
import Charts from "./components/chart.jsx"
import List from "./components/List.jsx"
import Dates from "./components/Dates.jsx"
import Select from "./components/Select.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Button} from "react-bootstrap"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current: [],
            show: "Bitcoin",
            toggle: false,
            button: "Hourly"
        }
        this.getData = this.getData.bind(this);
        this.callChart = this.callChart.bind(this)
        this.toggleButton = this.toggleButton.bind(this)
        this.change = this.change.bind(this)
    }

    componentWillMount() {
        this.getData()
    }

    callChart(data) {
        Charts({data: data, show: this.state.show})
    }

    getData() {
        axios.get('/Data/' + this.state.show)
        .then((data) => {
            console.log("info from getting Data: ", data.data.Data.Data)
            this.setState({
                current: data.data.Data.Data
            }, () => this.callChart(data.data.Data.Data))
           
        })
        .catch((error) => {
            console.log('error in get data (get request): ', error)
        })
    }

    toggleButton() {
        if(this.state.toggle){
            this.setState({
                button: "Hourly",
                toggle: false
            })
        } else {
            this.setState({
                button: "Weekly",
                toggle: true
            })
        }
    }

    change(e){
        e.preventDefault()
        this.setState({
            show: e.target.value
        }, () => this.getData())
    }
   

    render() {
        return (
            <Container className='justify-content-lg-center'>
                <Row>
                    <h1>Cryto Prices</h1>
                </Row>
                <Row>
                    <Select change={this.change} show={this.state.show}/>
                </Row>
                <Row className="justify-content-center">
                     <canvas id="myChart"/>
                </Row>
                <Row style={{margin: '20px'}}>
                    <Col>
                        <Button onClick={this.toggleButton}>{this.state.button}</Button>
                    </Col>
                    <Col>
                        <Dates current={this.state.current}/>
                    </Col>
                </Row>
                <Row>
                    <List current={this.state.current}/>
                </Row>
            </Container>
        )
    }
}

export default App;