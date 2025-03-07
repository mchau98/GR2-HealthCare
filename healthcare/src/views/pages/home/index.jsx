import "./index.css";
import { useState } from "react";
import React from "react";
import poster from "../../../assets/poster.png";
import intro from "../../../assets/intro.jpg";
import chatluong from "../../../assets/chatluong.png";
import doingu from "../../../assets/doingu.png";
import giaca from "../../../assets/giaca.png";
import tocdo from "../../../assets/tocdo.png";
import { Button, Row, Col, Carousel } from "antd";
import SliderComponent from "../../../components/slider/MewMobileSlide"
function Home() {
  const slogan = [
    {
      img: <img src={tocdo} style={{ width: "64px", height: "75px" }} />,
      name: "Tốc độ phục vụ",
      intro:
        "Chúng tôi cam kết cung cấp sự hỗ trợ nhanh chóng và đáp ứng nhu cầu khẩn cấp của khách hàng 24/7. Chúng tôi sẵn sàng phục vụ trong mọi tình huống và sẽ đến nơi ngay khi có thể để giúp đỡ khách hàng",
    },
    {
      img: <img src={chatluong} style={{ width: "64px", height: "75px" }} />,
      name: "Chất lượng dịch vụ",
      intro:
        "Chúng tôi luôn đặt chất lượng và an toàn lên hàng đầu trong mọi dịch vụ cứu hộ xe máy của mình. Đội ngũ nhân viên được đào tạo chuyên sâu và trang bị đầy đủ các thiết bị, công cụ để đảm bảo an toàn cho khách hàng và xe.",
    },
    {
      img: <img src={doingu} style={{ width: "64px", height: "75px" }} />,
      name: "Đội ngũ nhân viên",
      intro:
        "Chúng tôi sở hữu đội ngũ cứu hộ xe máy giàu kinh nghiệm và tay nghề cao. Xử lý các tình huống khó khăn một cách nhanh chóng, hiệu quả và đúng cách, có tư duy tốt và kỹ năng giao tiếp tốt để có thể đáp ứng tốt nhất các yêu cầu của khách hàng.",
    },
    {
      img: <img src={giaca} style={{ width: "64px", height: "75px" }} />,
      name: "Giá cả ưu đãi",
      intro:
        "Chúng tôi cam kết cung cấp dịch vụ cứu hộ xe với mức giá cạnh tranh và hợp lý nhất. Chúng tôi sẽ luôn đưa ra các giải pháp và mức giá phù hợp nhất để khách hàng có thể tin tưởng và sử dụng dịch vụ của chúng tôi lâu dài.",
    },
  ];
  return (
    <div className="home-container">
      <SliderComponent />
      {/* <div className="home-poster">
        <img
          src={poster}
          alt="posters"
          style={{ width: "1491px", height: "752px" }}
        />
      </div> */}
      <div className="home-introduce">
        <div className="home-intro">
          <div className="home-intro-img">
            {/* <Carousel autoplay>
            <div>
            <h3>
            </h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            </Carousel> */}
            <img
              src={intro}
              alt="OOPS! SOMETHING WAS WRONG"
              style={{ width: "511px", height: "288px" }}
            />
          </div>
          <div className="home-intro-text">
            <h3 id="intro-name">GIỚI THIỆU DỊCH VỤ CỨU HỘ</h3>
            Dịch vụ cứu hộ xe máy là một trong những dịch vụ quan trọng và cần
            thiết để giúp đỡ các tài xế khi gặp sự cố trên đường.Chúng tôi cung
            cấp các giải pháp cứu hộ nhanh chóng và chuyên nghiệp, bao gồm kéo
            xe, sửa chữa tại chỗ, cung cấp nhiên liệu và thay lốp. Với đội ngũ
            nhân viên kỹ thuật chuyên nghiệp, các thiết bị và công nghệ hiện
            đại, dịch vụ cứu hộ xe máy tại Hà Nội đảm bảo sẽ giúp bạn khắc phục
            sự cố và tiếp tục hành trình một cách an toàn và tiện lợi.
            <a href="tel:0972088534" className="call-button">
              <Button className="home-button-call" type="primary">
                GỌI CỨU HỘ NGAY
              </Button>
            </a>
          </div>
        </div>
        <div className="home-slogan">
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {slogan.map((item, index) => (
              <Col className="home-gutter-row" span={6} key={index}>
                <p>{item.img}</p>
                <div className="first-name">
                  <h4>{item.name}</h4>
                </div>
                <div>
                  <p>{item.intro}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Home;
