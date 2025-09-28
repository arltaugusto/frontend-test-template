import { GameCardSkeleton } from "@/components/molecules/GameCardSkeleton";

const LoadingSkeletons = () => {
  return (
    <div className="flex flex-col gap-y-6 pr-12 2xl:grid 2xl:grid-cols-3 2xl:gap-12">
      {Array.from({ length: 12 }).map((_, idx) => (
        <GameCardSkeleton key={`skeleton-${idx}`} />
      ))}
    </div>
  );
};

export { LoadingSkeletons };
