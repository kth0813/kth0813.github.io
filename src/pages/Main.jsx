export default function Main() {
  return (
    <div>
      <div>
        <h2>학익장로교회 청년부에 오신 것을 환영합니다</h2>
      </div>
      <div>
        <div>
          <h2>학익장로교회는</h2>
          <p>
            학익교회는 대한예수교장로회(합동)에 소속되어 있고 1955년에 학익동 인하대옆에 창립되어 오늘에 이르고 있습니다
            <br />
            1. 평신도를 동역자로 삼고 사역하는 교회 <br />
            2. 이웃에게 영향력을 주는 힘있는 교회 <br />
            3. 성경적이며 사도행전적인 교회 <br />
            4. 다음세대를 준비하는 교회
          </p>
          교회의 비전 <br />
          1.학익교회는 건전한 교회입니다. <br />
          2.행복한사람, 행복한 가정, 행복한 세상, 행복한 삶을 추구하는 교회입니다. <br />
          3. 하나님을 경험하고 세상을 축복하며 미래를 열어가는 교회입니다.
          <br />
          <a onClick={() => window.open("https://hakik.net/index.php")}>
            <h3>학익교회 홈페이지 바로가기</h3>
          </a>
        </div>
      </div>
      <div>
        <a href="#">
          <img src="images/pic02.png" alt="" />
        </a>
        <div>
          <h2>학익교회 청년부는</h2>
          <p>학익교회 청년부입니다.</p>
          <a onClick={() => window.open("https://www.youtube.com/channel/UC077SdkIaDGy7O9fNBIQVMg/featured")}>
            <h3>청년부 유튜브채널 바로가기</h3>
          </a>
        </div>
      </div>
      <div>
        <div>
          <h2>예배시간 안내</h2>
          <table>
            <tbody>
              <tr>
                <th>예 배 명</th>
                <th>요　일</th>
                <th>
                  시 간<br />
                </th>
                <th>장 소</th>
              </tr>
              <tr>
                <td className="ac">청년부예배</td>
                <td className="ac">주　일</td>
                <td className="ac">오후 2시</td>
                <td className="ac">지하 학생회실</td>
              </tr>
              <tr>
                <td className="ac" rowSpan="3">
                  주일예배
                </td>
                <td className="ac">주　일</td>
                <td className="ac">오전 9시</td>
                <td className="ac" rowSpan="4">
                  2층 본당
                </td>
              </tr>
              <tr>
                <td className="ac">주　일</td>
                <td className="ac">오전 11시</td>
              </tr>
              <tr>
                <td className="ac">주　일</td>
                <td className="ac">오후 2시</td>
              </tr>
              <tr>
                <td className="ac">수요예배</td>
                <td className="ac">수요일</td>
                <td className="ac">오후 7시</td>
              </tr>
              <tr>
                <td className="ac">금요철야예배</td>
                <td className="ac">금요일</td>
                <td className="ac">오후 8시30분</td>
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
          <h2>위치 안내</h2>
        </div>
      </div>
      <div>
        <a href="#">
          <img src="images/pic03.jpg" alt="" />
        </a>
        <div>
          <h2>연락처 및 링크</h2>
          <ul>
            <li onClick={() => window.open("https://hakik.net/")}>
              학익장로교회
              <br />
              인천광역시 미추홀구 재넘이길123번길 45
              <br />
              032-868-8475
            </li>
            <li>담당교역자 032-868-8475</li>
            <li onClick={() => window.open("https://www.youtube.com/channel/UC077SdkIaDGy7O9fNBIQVMg/featured")}>
              <h3>청년부 예배 채널</h3>
            </li>
            <li onClick={() => window.open("https://www.youtube.com/channel/UCS6DpEJwttnmKNrL_ObTyfg")}>
              <h3>주일예배 온라인 예배 채널</h3>
            </li>
            <li onClick={() => window.open("https://www.instagram.com/hakik_church/")}>
              <h3>학익교회 청년부 인스타</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
