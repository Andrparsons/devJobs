import { useRouter } from "next/router";
import { pullJob } from "../../hooks/use-jobs";
// to prevent xss attacks
import DOMPurify from "dompurify";

import Header from "../../components/Header/Header";
import JobContainer from "../../components/Container/JobContainer";
import JobHeader from '../../components/Header/JobHeader';

export default function Home() {
  const router = useRouter();
  const { data, error } = pullJob(router.query.jobid);
  console.log(data);

  let cleanHtml = "<h2>Loading...</h2>";

  if (data) {
    cleanHtml = DOMPurify.sanitize(data.description);
  }

  return (
    <div>
      <Header>
        <JobContainer>
          <JobHeader headerData={data} />
        </JobContainer>
      </Header>
      <JobContainer>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
        {error ? <p> {error.message} </p> : null}
      </JobContainer>
    </div>
  );
}
