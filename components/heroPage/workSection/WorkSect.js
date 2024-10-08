"use client";
import styles from "./WorkSect.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import WorkCard from "./WorkCard";
import WorkLink from "./WorkLink";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const WorkSect = () => {
  const { data, error, isLoading } = useSWR(
    `/api/LatestProject?date=${new Date().toString()}`,
    fetcher,
    {
      refreshInterval: 60000,
    }
  );
  return (
    <section className={styles.sect}>
      <h2>
        MY PAST <br /> PROJECT
      </h2>
      <div className={styles.workArea}>
        {isLoading == true ? (
          // Loading component
          <div
            className={styles.infocard}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p style={{ fontSize: "1.5em", width: "fit-content" }}>
              Working on it
            </p>
          </div>
        ) : error != undefined ? (
          // Error component
          <div
            className={styles.infocard}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p style={{ fontSize: "1.5em", width: "fit-content" }}>
              Can&apos;t get the Data from DB
            </p>
          </div>
        ) : data.length == 0 ? (
          // Empty component
          <div
            className={styles.infocard}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p style={{ fontSize: "1.5em", width: "fit-content" }}>
              No Data in DB
            </p>
          </div>
        ) : (
          data.map((element, index) => {
            console.log(data.rerenderDate);
            return <WorkCard key={"homePageWorkKey_" + index} {...element} />;
          })
        )}
      </div>
      <WorkLink>
        <Link href={"/work"} className={styles.but}>
          <p>ALL CASE STUDIES</p>
          <GoArrowUpRight />
        </Link>
      </WorkLink>
    </section>
  );
};
export default WorkSect;
