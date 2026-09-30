import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Info, Download, AlertCircle, X } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const shouldReduceMotion = useReducedMotion();

  const showToast = useCallback((message, options = {}) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    const toast = {
      id,
      message,
      type: options.type || "info", // "info" | "success" | "download" | "error"
      duration: options.duration || 3200,
    };

    setToasts((prev) => [...prev.slice(-2), toast]); // Keep at most 2 simultaneous toasts

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Render Viewport */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-[9999] pointer-events-none flex flex-col gap-2 max-w-sm w-full sm:w-auto"
      >
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon =
              toast.type === "success"
                ? Check
                : toast.type === "download"
                ? Download
                : toast.type === "error"
                ? AlertCircle
                : Info;

            return (
              <motion.div
                key={toast.id}
                layout
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 16, scale: 0.95 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, scale: 0.95 }
                }
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-auto flex items-center justify-between gap-3 p-3.5 px-4 rounded-[6px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl backdrop-blur-md text-[var(--text)] select-none"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-[4px] bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)] flex items-center justify-center shrink-0">
                    <Icon size={12} strokeWidth={2.5} />
                  </span>
                  <span className="font-mono text-xs text-[var(--text)] tracking-tight">
                    {toast.message}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeToast(toast.id)}
                  className="text-[var(--muted)] hover:text-[var(--text)] p-1 rounded-[4px] transition-colors focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                  aria-label="Dismiss toast"
                >
                  <X size={12} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
