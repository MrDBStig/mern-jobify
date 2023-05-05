import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Job from "./Job";
import Alert from "./Alert";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";
import JobsContainerWrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    totalJobs,
    page,
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) return <Loading center />;

  if (jobs.length === 0)
    return (
      <JobsContainerWrapper>
        <h2>No Jobs To Display...</h2>
      </JobsContainerWrapper>
    );
  return (
    <JobsContainerWrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </JobsContainerWrapper>
  );
};
export default JobsContainer;
