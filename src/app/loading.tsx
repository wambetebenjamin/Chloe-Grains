export default function Loading() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "40vh" }}
      role="status"
      aria-live="polite"
    >
      <div className="loading" style={{ display: "block" }}>
        Loading
      </div>
    </div>
  );
}
