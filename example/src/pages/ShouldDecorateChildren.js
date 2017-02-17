import React, { Component } from 'react';
import {
  Col,
  Grid,
  Jumbotron,
  Row
} from 'react-bootstrap';
import Helmet from 'react-helmet';

import ShouldDecorateChildren from '../components/ShouldDecorateChildren';
import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/app.css';

class  ShouldDecorateChildrenPage extends Component {
    render() {
        return (
            <div>
                <Helmet title="Should Decorate Children | React Cursor Position" />
                <Header {...this.props}/>
                <Jumbotron>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h2>Should Decorate Children - API Example</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5}>
                                <ul className="summary__list">
                                    <li>
                                        Set shouldDecorateChildren false when you do not want child
                                        components to receive cursor position props
                                    </li>
                                    <li>
                                        Default value is true
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={5}>
                                <ul className="summary__list">
                                    <li>Does not affect onCursorPositionChanged</li>
                                    <li>Type: Boolean</li>
                                    <li>
                                        <a href="#">
                                            Example Code
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={6} md={4} lg={4}>
                            <ShouldDecorateChildren/>
                        </Col>
                        <Col sm={6} md={8} lg={8}>
                            <a
                                className="highlighter"
                                style={{ height: '600px' }}
                                href="#"
                            >
                                <iframe
                                    src="should-decorate-children.html"
                                    frameBorder="0"
                                    className="code-frame"
                                />
                            </a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ShouldDecorateChildrenPage;
