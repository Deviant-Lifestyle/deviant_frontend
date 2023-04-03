import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";

const ConceptContent = () => {
  return (
    <div className="home-content-concept space-mb--r130">
      <Container className="wide">
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={8} className="offset-lg-4">
                <div className="section-title-container section-title--one section-title--concepthome space-mb--r130">
                  <p className="section-label space-mb--20">SS-2020</p>
                  <h1>Basic instinct</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                    ndisse suscipit sagittis leo sit met condimentum estibulum
                    issim Lorem ipsum dolor sit amet, consectetur cing elit.
                  </p>
                  <Anchor path="/shop/left-sidebar" className="lezada-button-2">
                    shop collection
                  </Anchor>
                </div>
              </Col>
              <Col sm={10}>
                <div className="single-category single-category--one space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/40.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Lingerie & Apparel</p>
                      <Anchor path="/shop/left-sidebar">
                        + Online store
                      </Anchor>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col sm={8} className="offset-sm-4">
                <div className="single-category single-category--one space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/11.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Sexual Enhancers</p>
                      <Anchor path="/shop/left-sidebar">
                        + Online store
                      </Anchor>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col lg={6} sm={8} className="offset-lg-5">
                <div className="single-category single-category--one">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/27.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Lubricants</p>
                      <Anchor path="/shop/left-sidebar">
                        + Online store
                      </Anchor>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={8} className="offset-lg-2">
                <div className="single-category single-category--one single-category--custom-width space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/16.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Sex Toys</p>
                      <Anchor path="/shop/left-sidebar">
                        + Online store
                      </Anchor>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col lg={6} sm={8} className="offset-lg-2">
                <div className="single-category single-category--one space-mb--r130">
                  <div
                    className="single-category__content single-category__content--textbanner single-category__content--textbanner--style-two bg-img"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/33.jpg"
                      })`
                    }}
                  >
                    <p className="text">
                      <span>brand</span>
                      <br />
                      <span>made</span>
                      <br />
                      <span>with love</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={8} className="offset-sm-2">
                <div className="single-category single-category--one">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/custom/25.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Party Supplies</p>
                      <Anchor path="/shop/left-sidebar">
                        + Online store
                      </Anchor>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConceptContent;
