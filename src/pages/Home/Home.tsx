import styled from 'styled-components'
import 'animate.css'
const HomeRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(
      113.54deg,
      rgba(103, 58, 194, 0.5) 10.91%,
      rgba(122, 74, 221, 0.398) 25.92%,
      rgba(209, 103, 255, 0.03) 55.76%
    ),
    linear-gradient(160.75deg, #7a4add 41.37%, #d57bff 98.29%);
  .first_text {
    padding: 0 15px 40px 15px;
    font-size: 22px;
    min-height: 100%;
    height: 100vh;

    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    line-height: 28px;
  }
  .second_text {
    background-color: #000;
    width: 100%;
    height: auto;
    padding: 30px 15px;
  }
  .second_text_titleBox {
    padding: 10px 20px;
    width: 100%;
    height: auto;
    background: #990dd0;
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
    img {
      margin-top: 30px;
    }
  }
  .third_text {
    margin-top: 30px;
    width: 100%;
    height: auto;
    padding: 20px 15px;
    border: 3px solid #990dd0;
  }
  .third_text_titleBox {
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
    img {
      margin-top: 28px;
    }
  }
  .title {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-size: 24px;
    font-weight: 600;
  }
  .img_box {
    margin-top: 40px;
  }
  .footer_box {
    width: 100%;
    height: auto;
    padding: 40px 20px;
    font-size: 16px;
    line-height: 10px;
    background: linear-gradient(
        113.54deg,
        rgba(103, 58, 194, 0.3) 4.91%,
        rgba(122, 74, 221, 0.398) 10.92%,
        rgba(209, 103, 255, 0.03) 50.76%
      ),
      linear-gradient(160.75deg, #7a4add 1.37%, #d57bff 98.29%);
    p {
      margin-top: 10px;
    }
    .small_title {
      font-size: 14px;
    }
    .link_box {
      margin-top: 20px;
      align-items: center;
      justify-content: center;
    }
  }
`
export default function Home() {
  return <HomeRoot>Home</HomeRoot>
}
