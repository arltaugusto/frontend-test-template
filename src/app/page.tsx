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
    <main className="flex flex-col">
      <TopSellers />
      <div className="px-6 py-8 2xl:px-32">
        <Suspense key={genre} fallback={<LoadingSkeletons />}>
          <HomeScreen genre={genre} />
        </Suspense>
      </div>
    </main>
  );
}
