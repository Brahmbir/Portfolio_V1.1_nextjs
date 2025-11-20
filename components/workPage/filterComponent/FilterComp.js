"use client";

import styles from "./FilterComp.module.css";
import ProjectCard, {
  EmptyResult,
  Loading,
  Error,
} from "@/components/workPage/projectCard/ProjectCard";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const FilterComponenet = () => {
  const [token, setToken] = useState("all");
  let allFilter = ["all", "code", "game", "video"];
  let page = 1;
  const { data, error, isLoading } = useSWR(
    `/api/WorkTable?type=${token}&page=1`,
    fetcher,
    {
      refreshInterval: 60000,
    }
  );
  return (
    <>
      <div className={styles.selectTag}>
        {allFilter.map((tag, i) => (
          <button
            key={"TG" + i}
            data-active={token == tag}
            onClick={() =>
              setToken(() => {
                page = 1;
                return `${tag}`;
              })
            }
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.workListCont}>
        {isLoading == true ? (
          <Loading />
        ) : error != undefined ? (
          <Error error={error} />
        ) : data.length == 0 ? (
          <EmptyResult />
        ) : (
          data.map((entry, i) => (
            <ProjectCard index={i} {...entry} key={"PC" + entry.Tittle + i} />
          ))
        )}
      </div>
    </>
  );
};

export default FilterComponenet;
