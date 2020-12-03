import useSWR from "swr";

export default function useJobs(query) {
  return useSWR(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query.search}&location=${query.place}`
  );
}

export function pullJob(jobid) {
  return useSWR(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobid}.json`
  );
}
