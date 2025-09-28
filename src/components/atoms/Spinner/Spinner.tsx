import clsx from "clsx";

interface SpinnerProps {
  className?: string;
}
const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        "h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent",
        className,
      )}
    ></div>
  );
};

export { Spinner };
