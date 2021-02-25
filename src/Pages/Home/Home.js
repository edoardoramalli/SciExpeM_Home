import React from "react";
const antd = require('antd');
const {Col, Row, Image} = antd



class Home extends React.Component{

    state = {
        media: null,
        nav: null
    };

    componentDidMount = () => {
        this.setState({
            media: this.media,
            nav: this.nav
        });
    };

    render() {
        const contentStyle = {
            height: '350px',
            color: '#fff',
            lineHeight: '350px',
            textAlign: 'center',
            background: '#364d79',
        };
        return(

            <>
                <Row style={{'fontFamily': 'Shippori Mincho', 'fontSize': 90}}>
                    <Col offset={8}>
                        SciExpeM
                    </Col>
                </Row>
                <Row style={{'fontFamily': 'Shippori Mincho', 'fontSize': 30}}>
                    <Col offset={7}>
                        <div style={{display: 'flex'}}>
                            <div style={{color: "red"}}>&nbsp;Sci</div>entific&nbsp;
                            <div style={{color: "red"}}>Expe</div>riments&nbsp;and&nbsp;
                            <div style={{color: "red"}}>M</div>odels
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Image
                            src="https://i.ibb.co/KmWKPGL/Unknown-9-1.png"
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            src="https://i.ibb.co/tCPx7Zb/Schermata-2021-02-24-alle-21-16-30.png"
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            src="https://i.ibb.co/KmWKPGL/Unknown-9-1.png"
                        />
                    </Col>
                </Row>

            </>

        )
    }

}

export default Home;