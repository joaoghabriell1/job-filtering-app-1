import { json, useLoaderData } from "react-router-dom";
import styles from "./JobDetails.module.css";
import InfoSection from "./InfoSection";
import Container from "../../components/UI/Container";
import CompanyCard from "./CompanyCard";
import Footer from "./Footer";

const JobDetails = (props) => {
  const data = useLoaderData();
  const values = Object.values(data);

  const {
    postedAt,
    contract,
    location,
    position,
    description,
    requirements,
    role,
    logoBackground,
    company,
    website,
  } = values[0];

  return (
    <>
      <Container>
        <CompanyCard logobg={logoBackground} company={company} site={website} />
        {
          <div className={styles.wrapper}>
            <InfoSection
              posted={postedAt}
              contract={contract}
              jobPosition={position}
              location={location}
              description={description}
              reqItems={requirements.items}
              reqContent={requirements.content}
              roleContent={role.content}
              roleItems={role.items}
            />
          </div>
        }
      </Container>
      <Footer position={position} company={company} />
    </>
  );
};

export default JobDetails;

export const loader = async ({ params }) => {
  const id = params.jobId;
  const response = await fetch(
    `https://job-filter-api-default-rtdb.firebaseio.com/jobs.json?orderBy="id"&equalTo=${id}`
  );

  /* */
  if (!response.ok) {
    throw json({
      message: "Could not fetch details...",
      status: 404,
    });
  }

  const data = await response.json();

  return data;
};
