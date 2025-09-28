const GameCardSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col gap-y-5 rounded-2xl border border-neutral-750 p-6">
      <div className="h-[240px] w-full rounded-t-2xl bg-gray-300" />
      <div className="flex flex-col gap-y-3">
        <div className="h-5 w-16 rounded bg-gray-300" />
        <div className="flex justify-between">
          <div className="h-5 w-28 rounded bg-gray-300" />
          <div className="h-5 w-12 rounded bg-gray-300" />
        </div>
      </div>

      <div className="h-[56px] w-full rounded-lg bg-gray-300" />
    </div>
  );
};

export { GameCardSkeleton };
