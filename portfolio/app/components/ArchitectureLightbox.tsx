"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdZoomIn, MdZoomOut } from "react-icons/md";
import type { ArchitectureDiagram } from "../i18n/dictionaries/types";

type ArchitectureLightboxProps = {
  diagram: ArchitectureDiagram;
  title: string;
  closeLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  onClose: () => void;
};

export function ArchitectureLightbox({
  diagram,
  title,
  closeLabel,
  zoomInLabel,
  zoomOutLabel,
  onClose,
}: ArchitectureLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const toggleZoom = () => setZoomed((value) => !value);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 px-4 py-3 md:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="truncate text-sm font-semibold text-white md:text-base">
          {title}
        </p>

        <div className="flex flex-none items-center gap-2">
          <button
            type="button"
            onClick={toggleZoom}
            aria-label={zoomed ? zoomOutLabel : zoomInLabel}
            title={zoomed ? zoomOutLabel : zoomInLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15"
          >
            {zoomed ? <MdZoomOut size={22} /> : <MdZoomIn size={22} />}
          </button>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            title={closeLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15"
          >
            <MdClose size={22} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {/* m-auto on the child (instead of justify-center) keeps the zoomed image fully scrollable */}
        <div className="flex min-h-full min-w-full p-4 md:p-8">
          <motion.div
            className="m-auto"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={diagram.src}
              alt={title}
              width={diagram.width}
              height={diagram.height}
              unoptimized
              onClick={(event) => {
                event.stopPropagation();
                toggleZoom();
              }}
              className={`h-auto rounded-2xl shadow-2xl ${
                zoomed
                  ? "w-[220vw] max-w-none cursor-zoom-out md:w-[160vw]"
                  : "max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] cursor-zoom-in"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
