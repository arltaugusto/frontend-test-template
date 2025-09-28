"use client";
import React, { useEffect, useRef, useState } from "react";
import Chevron from "./icons/chevron.svg";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  renderOption: (option: Option) => React.ReactElement;
  onOptionClick?: (option: Option) => void;
  defaultOption?: number;
  className?: string;
}
const Dropdown = ({
  defaultOption,
  options,
  renderOption,
  onOptionClick,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || 0);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option, idx: number) => () => {
    setSelectedOption(idx);
    setIsOpen(false);
    onOptionClick && onOptionClick(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className={clsx("relative", className)}>
      <button className="flex w-full justify-between p-4" onClick={handleOpenClick}>
        {options[selectedOption].label}
        <Chevron
          className={clsx("transition-transform", {
            ["rotate-180"]: isOpen,
          })}
        />
      </button>
      {isOpen && (
        <ul className="border-netutral-650 absolute top-16 z-40 max-h-80 w-full overflow-y-auto rounded border bg-white shadow-md">
          {options.map((option, idx) => (
            <li
              key={option.value}
              className="px-4 py-2 transition-colors hover:bg-neutral-300"
              onClick={handleOptionClick(option, idx)}
            >
              {renderOption(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
