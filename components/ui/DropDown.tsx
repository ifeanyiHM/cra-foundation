"use client";
import { useState, useRef, useEffect, useId } from "react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  /** Matches your existing form-select width behaviour */
  fullWidth?: boolean;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option…",
  label,
  error,
  disabled = false,
  fullWidth = true,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const selected = options.find((o) => o.value === value) ?? null;

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close on Escape, navigate with arrow keys */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((o) => !o);
      return;
    }
    if (!open) return;
    const currentIdx = options.findIndex((o) => o.value === value);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = options[(currentIdx + 1) % options.length];
      onChange(next.value);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = options[(currentIdx - 1 + options.length) % options.length];
      onChange(prev.value);
    }
  };

  return (
    <>
      <style>{`
        .dd-root {
          position: relative;
        }

        .dd-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: .5rem;
          width: 100%;
          padding: .5rem .825rem;
          background: var(--white);
          border: 1.5px solid var(--border-default);
          border-radius: var(--radius-md);
          font-size: .9rem;
          font-weight: 400;
          color: var(--neutral-800);
          font-family: var(--font-sans);
          cursor: pointer;
          transition: border-color .15s ease, box-shadow .15s ease;
          text-align: left;
          line-height: 1.5;
          outline: none;
          user-select: none;
        }

        .dd-trigger:hover:not(:disabled) {
          border-color: var(--neutral-400);
        }

        .dd-trigger:focus-visible {
          border-color: var(--brand-600);
          box-shadow: 0 0 0 3px rgba(220,38,38,.12);
        }

        .dd-trigger[data-open="true"] {
          border-color: var(--brand-600);
          box-shadow: 0 0 0 3px rgba(220,38,38,.12);
        }

        .dd-trigger:disabled {
          opacity: .5;
          cursor: not-allowed;
          background: var(--neutral-50);
        }

        .dd-trigger[data-error="true"] {
          border-color: var(--brand-600);
        }

        .dd-placeholder {
          color: var(--neutral-400);
          font-weight: 400;
        }

        .dd-selected-text {
          color: var(--neutral-800);
          font-weight: 500;
        }

        .dd-chevron {
          flex-shrink: 0;
          color: var(--neutral-400);
          transition: transform .2s ease, color .15s ease;
          width: 1rem;
          height: 1rem;
        }

        .dd-chevron[data-open="true"] {
          transform: rotate(-180deg);
          color: var(--brand-600);
        }

        /* Dropdown panel */
        .dd-panel {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          z-index: 200;
          background: var(--white);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0,0,0,.1), 0 2px 8px rgba(0,0,0,.06);
          overflow: hidden;
          animation: dd-open .14s ease;
        }

        @keyframes dd-open {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .dd-list {
          padding: .3rem;
          max-height: 14rem;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--border-subtle) transparent;
        }

        .dd-list::-webkit-scrollbar { width: 4px; }
        .dd-list::-webkit-scrollbar-thumb { background: var(--border-subtle); border-radius: 99px; }

        .dd-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: .5rem;
          width: 100%;
          padding: .525rem .75rem;
          border-radius: var(--radius-md);
          border: none;
          background: transparent;
          font-size: .875rem;
          font-weight: 500;
          font-family: var(--font-sans);
          color: var(--neutral-700);
          cursor: pointer;
          text-align: left;
          transition: background .1s ease, color .1s ease;
          outline: none;
        }

        .dd-option:hover {
          background: var(--neutral-50);
          color: var(--neutral-950);
        }

        .dd-option:focus-visible {
          background: var(--neutral-100);
          color: var(--neutral-950);
        }

        .dd-option[data-selected="true"] {
          background: var(--brand-50);
          color: var(--brand-600);
          font-weight: 600;
        }

        .dd-option[data-selected="true"]:hover {
          background: rgba(220,38,38,.1);
        }

        .dd-check {
          flex-shrink: 0;
          width: .875rem;
          height: .875rem;
          color: var(--brand-600);
        }

        /* Error message */
        .dd-error {
          font-size: .8rem;
          color: var(--brand-600);
          margin-top: .3rem;
          font-weight: 500;
        }

        /* Responsive scale > 1280px — mirrors form-input breakpoints */
        @media (min-width: 1440px) {
          .dd-trigger { font-size: .9rem; padding: .575rem .825rem; }
          .dd-option  { font-size: .9rem; padding: .55rem .8rem; }
          .dd-error   { font-size: .8rem; }
        }

        @media (min-width: 1536px) {
          .dd-trigger { font-size: 1rem; padding: .65rem .925rem; }
          .dd-option  { font-size: 1rem; padding: .625rem .9rem; }
          .dd-error   { font-size: .9rem; }
          .dd-chevron { width: 1.1rem; height: 1.1rem; }
          .dd-check   { width: .975rem; height: .975rem; }
        }

        @media (min-width: 1680px) {
          .dd-trigger { font-size: 1.1rem; padding: .725rem 1.025rem; }
          .dd-option  { font-size: 1.1rem; padding: .7rem 1rem; }
          .dd-error   { font-size: .975rem; }
          .dd-chevron { width: 1.2rem; height: 1.2rem; }
          .dd-check   { width: 1.075rem; height: 1.075rem; }
        }

        @media (min-width: 1920px) {
          .dd-trigger { font-size: 1.275rem; padding: .875rem 1.2rem; }
          .dd-option  { font-size: 1.275rem; padding: .825rem 1.175rem; }
          .dd-error   { font-size: 1.125rem; }
          .dd-chevron { width: 1.4rem; height: 1.4rem; }
          .dd-check   { width: 1.225rem; height: 1.225rem; }
          .dd-list    { max-height: 18rem; }
        }
      `}</style>

      <div
        ref={ref}
        className="dd-root"
        style={{ width: fullWidth ? "100%" : "auto" }}
      >
        {label && (
          <label
            htmlFor={id}
            className="form-label"
            style={{ display: "block", marginBottom: ".3rem" }}
          >
            {label}
          </label>
        )}

        {/* Trigger button */}
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={`${id}-list`}
          data-open={open}
          data-error={!!error}
          className="dd-trigger"
          disabled={disabled}
          onClick={() => !disabled && setOpen((o) => !o)}
          onKeyDown={handleKeyDown}
        >
          {selected ? (
            <span className="dd-selected-text">{selected.label}</span>
          ) : (
            <span className="dd-placeholder">{placeholder}</span>
          )}
          <RiArrowDownSLine className="dd-chevron" data-open={open} />
        </button>

        {/* Panel */}
        {open && (
          <div className="dd-panel" role="presentation">
            <div
              id={`${id}-list`}
              role="listbox"
              aria-label={label}
              className="dd-list"
            >
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    data-selected={isSelected}
                    className="dd-option"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onChange(opt.value);
                        setOpen(false);
                      }
                    }}
                  >
                    {opt.label}
                    {isSelected && (
                      <RiCheckLine className="dd-check" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {error && <p className="dd-error">{error}</p>}
      </div>
    </>
  );
}
