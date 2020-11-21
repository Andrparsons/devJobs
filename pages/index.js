import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import useJobs from "../hooks/use-jobs";
import JobCard from "../components/JobCard/JobCard";
import Container from "../components/Container/Container";

export default function Home() {
  const { data, error } = useJobs();
  return (
    <div className={styles.container}>
      <Head>
        <title>devjobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container>
          <div className={styles.jobBoard}>
            {data
              ? data.map((job) => <JobCard key={job.id} job={job} />)
              : "loading..."}
            {error ? <p>{error.message}</p> : null}
          </div>
        </Container>
      </main>
    </div>
  );
}
