"use client";

import { Dropdown } from "@/components/molecules/Dropdown";
import { availableFilters } from "@/utils/endpoint";
import Link from "next/link";

interface TopSellersProps {
  genre?: string | null;
}
const TopSellers = ({ genre }: TopSellersProps) => {
  const allGenres = [{ value: "all", label: "All" }];
  const genres = allGenres.concat(
    availableFilters.map((genre) => ({
      label: genre,
      value: genre.replace(" ", "").toLocaleLowerCase(),
    })),
  );

  const startingIndex = genre
    ? genres.map((gen) => gen.value).indexOf(genre.replace(" ", "").toLocaleLowerCase())
    : 0;

  return (
    <div className="flex w-full flex-col border-b border-b-neutral-450 pb-8">
      <div className="flex flex-col gap-y-8 px-6 2xl:gap-y-12 2xl:px-32">
        <h2 className="text-2xl font-bold uppercase leading-7 text-neutral-850 2xl:text-4xl 2xl:normal-case">
          Top Sellers
        </h2>
        <div className="flex w-full items-center gap-x-6 2xl:justify-end">
          <span className="border-r border-neutral-850 pr-6 font-bold text-neutral-850">Genre</span>
          <Dropdown
            options={genres}
            className="w-56"
            defaultOption={startingIndex}
            renderOption={(option) => (
              <Link className="px-4 py-2 flex w-full h-full" href={`/?genre=${option.value}`}>
                {option.label}
              </Link>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export { TopSellers };
