import { GameCardSkeleton } from "@/components/molecules/GameCardSkeleton";

const LoadingSkeletons = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, idx) => (
        <GameCardSkeleton key={`skeleton-${idx}`} />
      ))}
    </>
  );
};

export { LoadingSkeletons };
