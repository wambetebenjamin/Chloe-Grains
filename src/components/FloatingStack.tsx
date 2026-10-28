import { whatsappLink } from "@/lib/data/site";
import VoiceTour from "./VoiceTour";

/**
 * The floating stack pinned bottom-left: WhatsApp chat plus the voice tour.
 * The template's scroll-top button stays bottom-right, so nothing overlaps.
 */
export default function FloatingStack() {
  return (
    <div className="cg-float">
      <VoiceTour />
      <a
        className="cg-float-btn cg-whatsapp-btn"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Chloe Grains on WhatsApp"
        title="Chat with Chloe Grains on WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}
