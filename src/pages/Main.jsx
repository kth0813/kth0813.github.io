import igImage from "../img/ig.svg";
import ytImage from "../img/yt.svg";
import yjImage from "../img/yj.svg";
import img01 from "../img/img01.jpg";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.jpg";
export default function Main() {
  return (
    <div style={{ textAlign: "center", paddingBottom: "100px" }}>
      <div style={{ border: "1px solid #ddd", width: "900px", margin: "auto", height: "80px", marginTop: "20px" }}>
        <h1>학익장로교회 청년부에 오신 것을 환영합니다</h1>
      </div>
      <div
        style={{
          width: "900px",
          margin: "auto",
          height: "580px",
          marginTop: "20px",
          backgroundImage: `linear-gradient(to top, rgb(255 255 255 / 65%), rgb(255 255 255 / 90%)), url(${img03})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 style={{ paddingTop: "30px" }}>학익장로교회는...</h2>
        <div>
          <table
            style={{
              margin: "auto",
              marginTop: "20px",
              borderCollapse: "separate",
              borderSpacing: "5px"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ccc" }}>
                <th colSpan="2" style={{ border: "none", borderRadius: "20px" }}>
                  학익교회는 대한예수교장로회(합동)에 소속되어 있으며
                  <br /> 1955년에 학익동 인하대옆에 창립되어 오늘에 이르고 있습니다
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              <tr>
                <td style={{ border: "none", borderRadius: "20px" }}>평신도를 동역자로 삼고 사역하는 교회</td>
                <td style={{ border: "none", borderRadius: "20px" }}>이웃에게 영향력을 주는 힘있는 교회</td>
              </tr>
              <tr>
                <td style={{ border: "none", borderRadius: "20px" }}>성경적이며 사도행전적인 교회</td>
                <td style={{ border: "none", borderRadius: "20px" }}>다음세대를 준비하는 교회</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table style={{ margin: "auto", marginTop: "20px", borderCollapse: "separate", borderSpacing: "5px" }}>
          <thead style={{ backgroundColor: "#ccc" }}>
            <tr>
              <th style={{ border: "none", borderRadius: "20px" }}>교회의 비전</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            <tr>
              <td style={{ border: "none", borderRadius: "20px" }}> 학익교회는 건전한 교회입니다.</td>
            </tr>
            <tr>
              <td style={{ border: "none", borderRadius: "20px" }}>
                행복한사람, 행복한 가정, 행복한 세상, 행복한 삶을 추구하는 교회입니다.
              </td>
            </tr>
            <tr>
              <td style={{ border: "none", borderRadius: "20px" }}>
                하나님을 경험하고 세상을 축복하며 미래를 열어가는 교회입니다.
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", paddingTop: "20px" }}
        >
          <div
            style={{
              width: "240px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
              boxShadow: "2px 2px #ddd"
            }}
          >
            <a
              href="https://hakik.net/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
              }}
            >
              <img src={yjImage} style={{ width: "20px", marginRight: "10px" }} />
              학익교회 홈페이지
            </a>
          </div>
          <div
            style={{
              width: "240px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
              boxShadow: "2px 2px #ddd"
            }}
          >
            <a
              href="https://www.youtube.com/channel/UCS6DpEJwttnmKNrL_ObTyfg"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
              }}
            >
              <img src={ytImage} style={{ width: "20px", marginRight: "10px" }} />
              학익교회 예배 유튜브
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "900px",
          margin: "auto",
          marginTop: "20px",
          height: "370px",
          backgroundImage: `linear-gradient(to top, rgb(255 255 255 / 75%), rgb(255 255 255 / 75%)), url(${img01})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 style={{ paddingTop: "30px" }}>학익교회 청년부는...</h2>
        <p>학익교회 청년부입니다. 좋아요.</p>
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", paddingTop: "170px" }}
        >
          <div
            style={{
              width: "240px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
              boxShadow: "2px 2px #ddd"
            }}
          >
            <a
              href="https://www.youtube.com/channel/UC077SdkIaDGy7O9fNBIQVMg/featured"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
              }}
            >
              <img src={ytImage} style={{ width: "20px", marginRight: "10px" }} />
              청년부 예배 유튜브
            </a>
          </div>
          <div
            style={{
              width: "240px",
              height: "40px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
              boxShadow: "2px 2px #ddd"
            }}
          >
            <a
              href="https://www.instagram.com/hakik_church/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
              }}
            >
              <img src={igImage} style={{ width: "20px", marginRight: "10px" }} />
              청년부 인스타그램
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "900px",
          margin: "auto",
          marginTop: "20px",
          height: "390px",
          backgroundImage: `linear-gradient(to top, rgb(255 255 255 / 65%), rgb(255 255 255 / 75%)), url(${img02})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 style={{ paddingTop: "30px" }}>예배시간 안내</h2>
        <table style={{ margin: "auto" }}>
          <thead style={{ backgroundColor: "#ddd" }}>
            <tr>
              <th>예　배</th>
              <th>요　일</th>
              <th>시　간</th>
              <th>장　소</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            <tr>
              <td className="ac">청년부예배</td>
              <td className="ac">주　일</td>
              <td className="ac">오후 2시</td>
              <td className="ac">지하 학생회실</td>
            </tr>
            <tr>
              <td className="ac">주일예배</td>
              <td className="ac">주　일</td>
              <td className="ac">오전 9시 / 오전 11시 / 오후 2시</td>
              <td className="ac" rowSpan="2">
                2층 본당
              </td>
            </tr>

            <tr>
              <td className="ac">수요예배</td>
              <td className="ac">수요일</td>
              <td className="ac">오후 7시</td>
            </tr>
            <tr>
              <td className="ac">금요철야예배</td>
              <td className="ac">금요일</td>
              <td className="ac">오후 8시 30분</td>
              <td className="ac" rowSpan="2">
                1층 소예배실
              </td>
            </tr>
            <tr>
              <td className="ac">새벽예배</td>
              <td className="ac">주일~금요일</td>
              <td className="ac">오전 5시</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          width: "900px",
          margin: "auto",
          height: "600px",
          marginTop: "20px",
          backgroundImage: `linear-gradient(to top, rgb(255 255 255 / 65%), rgb(255 255 255 / 90%)), url(${img03})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 style={{ paddingTop: "30px" }}>위치 안내</h2>
        <div
          style={{
            font: "normal normal 400 12px/normal dotum, sans-serif",
            width: "640px",
            height: "447px",
            color: "#333",
            position: "relative",
            margin: "auto",
            backgroundColor: "white",
            padding: "10px"
          }}
        >
          <div style={{ textAlign: "left", color: "#888", fontSize: "14px", fontWeight: "bolder" }}>
            <i className="fa fa-address-book" style={{ margin: "0 5px 5px 5px" }} />
            인천광역시 미추홀구 재넘이길123번길 45
            <br />
            <i className="fa fa-phone" style={{ margin: "5px 5px 15px 5px" }} />
            032-868-8475
          </div>
          <div style={{ height: "360px" }}>
            <a
              href="https://map.kakao.com/?urlX=424838.0&urlY=1096590.0&itemId=9591730&q=%ED%95%99%EC%9D%B5%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C&srcid=9591730&map_type=TYPE_MAP&from=roughmap"
              target="_blank"
            >
              <img
                className="map"
                src="http://t1.daumcdn.net/roughmap/imgmap/9bed308c9181a25ed389f3a10c38989023fba6484853a07c87ce24c10d1e69ee"
                width="638px"
                height="358px"
                style={{ border: "1px solid #ddd" }}
              />
            </a>
          </div>
          <div
            style={{
              overflow: "hidden",
              padding: "7px 11px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "0px 0px 2px 2px",
              backgroundColor: "rgb(249, 249, 249)"
            }}
          >
            <a href="https://map.kakao.com" target="_blank" style={{ float: "left" }}>
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width={72}
                height={16}
                alt="카카오맵"
                style={{ display: "block", width: "72px", height: "16px" }}
              />
            </a>
            <div style={{ float: "right", position: "relative", top: "1px", fontSize: "11px" }}>
              <a
                target="_blank"
                href="https://map.kakao.com/?from=roughmap&srcid=9591730&confirmid=9591730&q=%ED%95%99%EC%9D%B5%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C&rv=on"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                로드뷰
              </a>
              <span
                style={{
                  width: "1px",
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left"
                }}
              />
              <a
                target="_blank"
                href="https://map.kakao.com/?from=roughmap&eName=%ED%95%99%EC%9D%B5%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C&eX=424838.0&eY=1096590.0"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                길찾기
              </a>
              <span
                style={{
                  width: "1px",
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left"
                }}
              />
              <a
                target="_blank"
                href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=9591730&itemId=9591730&q=%ED%95%99%EC%9D%B5%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C&urlX=424838.0&urlY=1096590.0"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
