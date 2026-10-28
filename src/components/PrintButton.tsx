"use client";

export default function PrintButton({ label = "Print this recipe" }: { label?: string }) {
  return (
    <button type="button" className="cg-chip" onClick={() => window.print()}>
      <i className="bi bi-printer" aria-hidden="true"></i>
      {label}
    </button>
  );
}
