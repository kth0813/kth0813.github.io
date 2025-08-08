import igImage from "../img/ig.svg";
import ytImage from "../img/yt.svg";
import yjImage from "../img/yj.svg";
import img01 from "../img/img01.jpg";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.jpg";

function SocialButton({ href, icon, label }) {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="social-button" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={icon} className="social-icon" />
      <span className="social-label">{label}</span>
    </div>
  );
}

export default function Main() {
  return (
    <div className="page">
      <div className="header">학익장로교회 청년부에 오신 것을 환영합니다</div>
      <div className="main-container">
        <section
          className="intro-section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.65), rgba(255,255,255,0.9)), url(${img03})`
          }}
        >
          <div className="section-title">학익장로교회는...</div>
          <table className="intro-table">
            <tbody>
              <tr>
                <td colSpan="2" className="intro-cell">
                  대한예수교장로회(합동) 소속 교회로 1955년 창립되었습니다.
                </td>
              </tr>
              <tr>
                <td className="intro-cell">평신도를 동역자로 삼고 사역하는 교회</td>
                <td className="intro-cell">이웃에게 영향력을 주는 힘있는 교회</td>
              </tr>
              <tr>
                <td className="intro-cell">성경적이며 사도행전적인 교회</td>
                <td className="intro-cell">다음세대를 준비하는 교회</td>
              </tr>
            </tbody>
          </table>
          <section className="social-button-group">
            <SocialButton href="https://hakik.net/" icon={yjImage} label="학익교회 홈페이지" />
            <SocialButton
              href="https://www.youtube.com/channel/UCS6DpEJwttnmKNrL_ObTyfg"
              icon={ytImage}
              label="예배 유튜브"
            />
          </section>
        </section>

        <section
          className="intro-section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${img01})`
          }}
        >
          <div className="section-title">학익교회 청년부는...</div>
          <p className="cell">
            학익교회 청년부는 예배와 말씀을 중심으로 하나님을 사랑하고 이웃을 섬기는 공동체입니다.
            <br /> 함께 기도하고, 함께 찬양하며, 하나님 나라를 꿈꾸는 여러분을 환영합니다 💒
          </p>
          <div className="social-button-group">
            <SocialButton
              href="https://www.youtube.com/channel/UC077SdkIaDGy7O9fNBIQVMg/featured"
              icon={ytImage}
              label="청년부 유튜브"
            />
            <SocialButton href="https://www.instagram.com/hakik_church/" icon={igImage} label="청년부 인스타그램" />
          </div>
        </section>

        <section
          className="intro-section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.65), rgba(255,255,255,0.9)), url(${img02})`
          }}
        >
          <div className="section-title">예배 안내</div>
          <table className="worship-table">
            <tbody>
              <tr>
                <td className="worship-cell">주일 예배</td>
                <td className="worship-cell">주일 오전 9시, 11시, 오후 2시</td>
              </tr>
              <tr>
                <td className="worship-cell">청년부 예배</td>
                <td className="worship-cell">주일 오후 2시</td>
              </tr>
              <tr>
                <td className="worship-cell">수요 예배</td>
                <td className="worship-cell">수요일 오후 7시</td>
              </tr>
              <tr>
                <td className="worship-cell">금요 기도회</td>
                <td className="worship-cell">금요일 오후 8시 30분</td>
              </tr>
              <tr>
                <td className="worship-cell">새벽 예배</td>
                <td className="worship-cell">주일 ~ 금요일 오전 5시</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className="intro-section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.65), rgba(255,255,255,0.9)), url(${img03})`
          }}
        >
          <div className="section-title">오시는 길</div>
          <div className="map-wrapper">
            <div className="map-info">
              <i className="fa fa-address-book" /> 인천광역시 미추홀구 재넘이길123번길 45
              <br />
              <i className="fa fa-phone" /> 032-868-8475
            </div>
            <div className="map-image">
              <a
                href="https://map.kakao.com/?urlX=424838.0&urlY=1096590.0&itemId=9591730&q=학익장로교회&srcid=9591730&map_type=TYPE_MAP&from=roughmap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="http://t1.daumcdn.net/roughmap/imgmap/9bed308c9181a25ed389f3a10c38989023fba6484853a07c87ce24c10d1e69ee"
                  alt="지도"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
