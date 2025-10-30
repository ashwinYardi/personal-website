"use client"

export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 50% -50px, rgba(37, 99, 235, 0.18), transparent 60%), radial-gradient(400px 200px at 10% 20%, rgba(59, 130, 246, 0.12), transparent 50%), radial-gradient(500px 240px at 90% 10%, rgba(14, 165, 233, 0.12), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.55) 1px, transparent 1px)",
          backgroundSize: "24px 24px, 24px 24px",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}
