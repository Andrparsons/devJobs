import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useJobs() {
  return useSWR(
    "https://jobs.github.com/positions.json",
    fetcher
  );
}
