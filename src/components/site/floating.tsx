import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "8801714570179";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello NBPPI, I'd like to enquire about your packaging products."
);

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-[#0B2D6B] shadow-[0_4px_16px_-4px_rgba(11,45,107,0.20)] transition hover:scale-105 hover:shadow-[0_8px_24px_-6px_rgba(11,45,107,0.28)]"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* WhatsApp button with tooltip */}
      <div className="group relative flex items-center gap-3">
        {/* Tooltip */}
        <div className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.18)]">
            <span className="text-xs font-semibold text-[#0B2D6B]">Chat on WhatsApp</span>
            {/* Arrow */}
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 rounded-sm bg-white" />
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.65)] transition-all duration-200 hover:scale-110 hover:shadow-[0_12px_36px_-8px_rgba(37,211,102,0.75)]"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative h-7 w-7"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.117 1.523 5.845L.057 23.486a.5.5 0 0 0 .614.636l5.807-1.519A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.925 0-3.734-.518-5.287-1.423l-.379-.224-3.929 1.028 1.003-3.826-.247-.393A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
      </div>
    </div>
  );
}