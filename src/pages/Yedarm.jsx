import yedarm01 from "../img/yedarm01.png";
import yedarm02 from "../img/yedarm02.png";

export default function Page() {
  return (
    <div className="page">
      <div className="header">예닮이란?</div>
      <div className="main-container">
        <div className="intro-block">
          <h3 className="block-title">H. 예닮 찾기</h3>
          <p className="block-desc">
            일상 속에서 <strong>예수님의 사랑을 돌아보고</strong>, 그 사랑을 실천할 수 있는 <strong>작은 기회</strong>를
            발견해요.
          </p>
        </div>

        <div className="intro-block">
          <h3 className="block-title">Y. 예닮 실천하기</h3>
          <p className="block-desc">
            발견한 사랑의 기회를 <strong>말과 행동으로 옮기며</strong>, 삶 속에서 예수님의 모습을 닮아가요.
          </p>
        </div>

        <div className="intro-block">
          <h3 className="block-title">M. 예닮 나눔하기</h3>
          <p className="block-desc">
            그 실천을 통해 느낀 <strong>변화와 감동</strong>을 함께 나누며, 서로를 <strong>격려하고 사랑</strong>으로
            이어지는 공동체를 만들어가요.
          </p>
        </div>
        <section className="intro-section">
          <img src={yedarm01} alt="예닮 이미지 1" className="intro-img" />
        </section>
        <section className="intro-section">
          <img src={yedarm02} alt="예닮 이미지 2" className="intro-img" />
        </section>
      </div>
    </div>
  );
}
