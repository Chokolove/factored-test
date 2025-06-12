"use client";
import Container from "@/components/Container";
import IntroText from "@/components/IntroText";
import Pagination from "@/components/Pagination";
import RequestFeedback from "@/components/RequestFeedback";
import SearchFilter from "@/components/SearchFilter";
import SkeletonRow from "@/components/SkeletonRow";
import Table from "@/components/Table";
import { useGetCharactersQuery } from "@/redux/services/peopleApi";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const introText = (
  <p className="text-base text-white">
    Step into our <strong>Star Wars Character Explorer!</strong>
    <br />
    Uncover the heroes, villains, scoundrels, and droids that shaped the galaxy
    — one name at a time.
    <br />
    Whether you&apos;re building your Rebel roster or brushing up on Imperial
    intel — <em>your character journey starts now.</em>
  </p>
);

const HEADERS = [
  "Name",
  "Height",
  "Mass",
  "Hair Color",
  "Skin Color",
  "Eye Color",
  "Birth Year",
  "Gender",
];
export default function Characters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [debounceName] = useDebounce(name, 500);
  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({
    page,
    name: debounceName,
  });
  const people = data?.results ?? data?.result ?? [];
  const showPagination = !name && data?.total_pages && people?.length > 0;

  useEffect(() => {
    setPage(1);
  }, [name]);

  return (
    <Container>
      <IntroText title="Meet the Legends Behind the Saga" text={introText} />

      <RequestFeedback isError={isError} isLoading={isLoading} />

      {!isLoading && data && (
        <div>
          <div className="flex justify-center">
            <SearchFilter
              placeholder="Search by name"
              value={name}
              onChange={setName}
              isLoading={isFetching || isLoading}
            />
          </div>

          <Table
            tableHeaders={HEADERS}
            data={people}
            renderRow={(film, index) => {
              return isFetching ? (
                [...Array(1)].map((_, index) => (
                  <SkeletonRow
                    key={index}
                    index={index}
                    columns={HEADERS.length}
                  />
                ))
              ) : (
                <tr
                  key={film._id}
                  className={`transition duration-200 ${
                    index % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#1f1f1f]"
                  } hover:bg-light-blue-soft`}
                >
                  <td className="px-6 py-4 font-medium">
                    {film.properties.name}
                  </td>
                  <td className="px-6 py-4">{film.properties.height} cm</td>
                  <td className="px-6 py-4">{film.properties.mass} kg</td>
                  <td className="px-6 py-4">{film.properties.hair_color}</td>
                  <td className="px-6 py-4">{film.properties.skin_color}</td>
                  <td className="px-6 py-4">{film.properties.eye_color}</td>
                  <td className="px-6 py-4">{film.properties.birth_year}</td>
                  <td className="px-6 py-4">{film.properties.gender}</td>
                </tr>
              );
            }}
          />
          {showPagination && (
            <Pagination
              previesPage={() =>
                setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1))
              }
              nextPage={() =>
                setPage((prev) => (prev + 1 > data.total_pages ? 1 : prev + 1))
              }
              page={page}
              setPage={setPage}
              totalPages={data.total_pages}
              isFetching={isFetching}
            />
          )}
        </div>
      )}
    </Container>
  );
}
