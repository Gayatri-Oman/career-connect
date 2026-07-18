import { useEffect, useState } from "react";

function App(){

  console.log("App function is running");
  const [jobs , setJobs] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:5000/jobs/")
    .then((response) => response.json())
    .then((data) => {
      setJobs(data);
    });
  }, []);

  return (
  <div>
    <h1>Career-Connect</h1>

    <h2>Total Jobs: {jobs.length}</h2>

    {jobs.map((job) => (
      <div key={job.id}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <hr />
      </div>
    ))}
  </div>
);
}

export default App;