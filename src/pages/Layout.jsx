import Left from "./Left";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fffafc", // 전체 배경을 메인과 통일
        minHeight: "100vh",
        fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif"
      }}
    >
      <Left />
      <main style={{ flexGrow: 1, padding: "40px 20px" }}>{children}</main>
    </div>
  );
}
