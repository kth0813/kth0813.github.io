import Left from "./Left";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <Left />
      </div>
      <div className="center-content">{children}</div>
    </div>
  );
}
