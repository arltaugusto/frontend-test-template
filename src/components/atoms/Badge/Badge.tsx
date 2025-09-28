import clsx from "clsx";

interface BadgeProps {
  label: string;
  className?: string;
}
const Badge = ({ label, className }: BadgeProps) => {
  return (
    <div
      className={clsx(
        "w-fit rounded bg-stone-100 px-3 py-2 text-base leading-4 text-neutral-850",
        className,
      )}
    >
      {label}
    </div>
  );
};

export { Badge };
