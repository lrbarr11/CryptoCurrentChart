import React from "react"
import axios from "axios"
import Charts from "./components/chart.jsx"
import List from "./components/List.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Button} from "react-bootstrap"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current: {}
        }
        this.getMonthly = this.getMonthly.bind(this);
    }

    componentWillMount() {
        this.getMonthly()
    }

    callChart(data) {
        Charts({data: data})
    }

    getMonthly() {
        axios.get('/month')
        .then((data) => {
            console.log("info from getting monthly: ", data.data)
            this.setState({
                current: data.data
            }, () => this.callChart(data.data))
           
        })
        .catch((error) => {
            console.log('error in get monthly: ', error)
        })
    }

    render() {
        return (
            <Container className='justify-content-lg-center'>
                <Row>
                    <h1>BitCoin Value</h1>
                </Row>
                <Row className="justify-content-center">
                     <canvas id="myChart"/>
                </Row>
                <Row>
                    <footer>
                        Powered by <a href='https://www.coindesk.com/price/bitcoin'>CoinDesk</a>
                    </footer>
                </Row>
                <Row style={{margin: '20px'}}>
                    <Col>
                    {/* <Button onClick={}>Monthly</Button> */}
                    </Col>
                    <Col>
                    {/* <Button onClick={}>Weekly</Button> */}
                    </Col>
                    <Col>
                    {/* <Button onClick={}>Hourly</Button> */}
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