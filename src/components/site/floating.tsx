import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {show ? (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-[#082B59] shadow-[var(--shadow-card)] transition hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
      <a
        href="https://wa.me/8801700000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)] transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}