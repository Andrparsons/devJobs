import { useRouter } from "next/router";
import { pullJob } from "../../hooks/use-jobs";
// to prevent xss attacks
import DOMPurify from "dompurify";

import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

export default function Home() {
  const router = useRouter();
  const { data, error } = pullJob(router.query.jobid);

  let cleanHtml = "<h2>Loading...</h2>";

  if (data) {
    cleanHtml = DOMPurify.sanitize(data.description);
  }

  return (
    <div>
      <Header>
        <div>Test</div>
      </Header>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
        {error ? <p> {error.message} </p> : null}
      </Container>
    </div>
  );
}
