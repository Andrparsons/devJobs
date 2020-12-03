import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import useJobs from "../hooks/use-jobs";
import JobCard from "../components/JobCard/JobCard";
import Container from "../components/Container/Container";

export default function Home() {
  const [query, setQuery] = useState({ search: "", place: "" });
  const { data, error } = useJobs(query);

  function handleQuery(newValue) {
    setQuery(newValue);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>devjobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header query={query} handleQuery={handleQuery} />
      <main>
        <Container>
          <div className={styles.jobBoard}>
            {data
              ? data.map((job) => (
                  <Link
                    key={job.id}
                    as={`/jobs/${job.id}`}
                    href="jobs/[jobid]"
                    passHref
                  >
                    <JobCard job={job} />
                  </Link>
                ))
              : "loading..."}
            {error ? <p>{error.message}</p> : null}
          </div>
        </Container>
      </main>
    </div>
  );
}
