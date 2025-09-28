import { HomeScreen } from "@/components/screens/Home";
import { LoadingSkeletons } from "@/components/screens/Home/components/LoadingSkeletons";
import { TopSellers } from "@/components/screens/Home/components/TopSellers";
import { Suspense } from "react";

type HomeProps = {
  searchParams: {
    genre?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopSellers />
      <div className="flex flex-col gap-y-6 px-6 py-8 2xl:grid 2xl:grid-cols-3 2xl:gap-12 2xl:px-32">
        <Suspense fallback={<LoadingSkeletons />}>
          <HomeScreen genre={genre} />
        </Suspense>
      </div>
    </main>
  );
}
