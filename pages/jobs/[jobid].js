import { useRouter } from "next/router";
import { pullJob } from "../../hooks/use-jobs";
// to prevent xss attacks
import DOMPurify from "dompurify";

export default function Home() {
  const router = useRouter();
  const { data, error } = pullJob(router.query.jobid);

  let cleanHtml = "<h2>Loading...</h2>";

  if (data) {
    cleanHtml = DOMPurify.sanitize(data.description);
  }

  console.log(router.query.jobid);
  console.log(data);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
      {error ? <p> {error.message} </p> : null}
    </div>
  );
}
