"use client";

import { Dropdown } from "@/components/molecules/Dropdown";
import { availableFilters } from "@/utils/endpoint";
import Link from "next/link";

const TopSellers = () => {
  const allGenres = [{ value: "all", label: "All" }];
  const genres = allGenres.concat(
    availableFilters.map((genre) => ({
      label: genre,
      value: genre.replace(" ", "").toLocaleLowerCase(),
    })),
  );

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
            renderOption={(option) => (
              <Link href={option.value === "all" ? "/" : `/?genre=${option.value}`}>
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
