"use client";

import Container from "@/components/Container";
import IntroText from "@/components/IntroText";
import RequestFeedback from "@/components/RequestFeedback";
import Table from "@/components/Table";
import { useGetFilmsQuery } from "@/redux/services/filmApi";
import { StarWarsFilm } from "@/types";
import { useState } from "react";

const introText = (
  <p className="text-base text-white">
    The saga continues in our <strong>Star Wars Film Explorer!</strong>
    <br />
    Dive into every chapter of the galaxy&apos;s greatest story — from Jedi
    legends to Sith betrayals.
    <br />
    Whether you&apos;re binging the trilogies or discovering them for the first
    time — <em>the adventure begins here.</em>
  </p>
);

const HEADERS = [
  "Title",
  "Director",
  "Release Date",
  "Producer",
  "Opening Crawl",
];

export default function Films() {
  const { data, isLoading, isError } = useGetFilmsQuery();
  const movies = data?.result;

  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Container>
      <IntroText title="The Saga Begins… Again!" text={introText} />

      <RequestFeedback isError={isError} isLoading={isLoading} />

      {!isLoading && movies && (
        <Table
          tableHeaders={HEADERS}
          data={movies}
          renderRow={(film: StarWarsFilm, index) => {
            const crawl = film.properties.opening_crawl;
            const isExpanded = expanded === film._id;
            return (
              <tr
                key={film._id}
                className={`transition duration-200 ${
                  index % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#1f1f1f]"
                } hover:bg-light-blue-soft`}
              >
                <td className="px-6 py-4 font-medium">
                  {film.properties.title}
                </td>
                <td className="px-6 py-4">{film.properties.director}</td>
                <td className="px-6 py-4">{film.properties.release_date}</td>
                <td className="px-6 py-4">{film.properties.producer}</td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => setExpanded(isExpanded ? null : film._id)}
                >
                  {isExpanded ? (
                    <span className="whitespace-pre-wrap">{crawl}</span>
                  ) : (
                    <span>
                      {crawl.slice(0, 100)}...
                      <span className="text-light-blue ml-1">
                        (show more...)
                      </span>
                    </span>
                  )}
                </td>
              </tr>
            );
          }}
        />
      )}
    </Container>
  );
}
