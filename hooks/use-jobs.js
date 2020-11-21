import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useJobs() {
  return useSWR(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
    fetcher
  );
}
