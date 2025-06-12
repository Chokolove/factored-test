"use client";

import Container from "@/components/Container";
import IntroText from "@/components/IntroText";
import Pagination from "@/components/Pagination";
import RequestFeedback from "@/components/RequestFeedback";
import SearchFilter from "@/components/SearchFilter";
import SkeletonCard from "@/components/SkeletonCard";
import StarshipCard from "@/components/StarshipCard";
import { useGetShipsQuery } from "@/redux/services/starshipApi";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const introText = (
  <p className="text-base text-white">
    Welcome to the <strong>Star Wars Starship Explorer!</strong>
    <br />
    Discover the galaxy&apos;s most legendary vessels — from nimble starfighters
    to massive capital ships.
    <br />
    Whether it&apos;s the <em>Millennium Falcon</em> or an Imperial Star
    Destroyer, explore their specs, roles, and legacy.
  </p>
);

export default function Films() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [debounceName] = useDebounce(name, 500);
  const [debounceModel] = useDebounce(model, 500);

  const rawParams = {
    page,
    name: debounceName,
    model: debounceModel,
  };

  const cleanedParams = Object.fromEntries(
    Object.entries(rawParams).filter(([, value]) => value)
  );

  const { data, isLoading, isFetching, isError } =
    useGetShipsQuery(cleanedParams);

  const ships = data?.results ?? data?.result ?? [];
  const isSearching = !!debounceName || !!debounceModel;
  const perPage = 4;
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  const visibleShips = isSearching ? ships.slice(startIndex, endIndex) : ships;
  const showPagination = ships.length > 0;

  useEffect(() => {
    setPage(1);
  }, [debounceName, debounceModel]);

  return (
    <Container>
      <IntroText title="Explore Iconic Starships" text={introText} />
      <RequestFeedback isError={isError} isLoading={isLoading} />

      {!isLoading && data && (
        <div>
          <div className="flex justify-center gap-2">
            <SearchFilter
              placeholder="Search by name"
              value={name}
              onChange={setName}
              isLoading={isFetching || isLoading}
            />
            <SearchFilter
              placeholder="Search by model"
              value={model}
              onChange={setModel}
              isLoading={isFetching || isLoading}
            />
          </div>

          {showPagination && (
            <Pagination
              previesPage={() =>
                setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1))
              }
              nextPage={() =>
                setPage((prev) =>
                  prev + 1 >
                  (isSearching
                    ? Math.ceil(ships.length / perPage)
                    : data.total_pages)
                    ? 1
                    : prev + 1
                )
              }
              page={page}
              setPage={setPage}
              totalPages={
                isSearching
                  ? Math.ceil(ships.length / perPage)
                  : data.total_pages
              }
              isFetching={isFetching}
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {isLoading || isFetching
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="bg-white/5 border border-white/20 rounded-xl shadow-sm animate-pulse backdrop-blur-sm p-4 text-white space-y-2 h-[330px]"
                  >
                    <SkeletonCard />
                  </div>
                ))
              : visibleShips.map((ship, index) => {
                  const starship = ship.properties;
                  return (
                    <div
                      key={starship.name + index}
                      className="bg-white/5 border border-white/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow shadow-light-blue backdrop-blur-sm p-4 text-white space-y-2"
                    >
                      <StarshipCard starship={starship} />
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </Container>
  );
}
