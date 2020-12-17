import React from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class DemoV4 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this._slidePrev}>
                Slider prev
              </Button>
              <Button bsStyle="primary" onClick={this._slideNext}>
                Slider next
              </Button>
              <Button bsStyle="primary" onClick={this._goToSlide}>
                Go to slide 2
              </Button>
            </ButtonGroup>
          </Col>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this._changeIcon}>
                Change Icon
              </Button>
              <Button bsStyle="primary" onClick={this._autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </Button>
            </ButtonGroup>
          </Col>
        
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel className="carousel-fade" version={4}>
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">
                  This carsouel transition is fade
                </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">
                  This carsouel transition is fade
                </span>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<DemoV4 />, document.getElementById("Demo"));