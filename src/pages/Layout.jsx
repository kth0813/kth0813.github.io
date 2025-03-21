import Left from "./Left";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Left />
      <div className="center-content">{children}</div>
    </div>
  );
}
