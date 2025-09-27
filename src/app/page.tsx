import { HomeScreen } from "@/components/screens/Home";
import { LoadingSkeletons } from "@/components/screens/Home/components/LoadingSkeletons";
import { Suspense } from "react";

type HomeProps = {
  searchParams: {
    genre?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-8">
      <div className="flex flex-col gap-y-6">
        <Suspense fallback={<LoadingSkeletons />}>
          <HomeScreen genre={genre} />
        </Suspense>
      </div>
    </main>
  );
}
