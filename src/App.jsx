import { useContext, useEffect } from 'react'
import Info from '@/component/Info'
import JobCard from '@/component/JobCard'
import { Link } from 'react-router-dom'
import AuthContext from "@/context/AuthContext";
import { JOBDATA } from '@/assets/data/jobdata';

function App() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <>
      <Info />
      <div className='w-full flex justify-center'>
        <div className='container'>
          <div className='mt-4 text-4xl text-bold py-10 border-b-2 border-[#B9B8B7] mx-8 sm:mx-12 xl:mx-0'>explore job</div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10 mx-8 sm:mx-12 xl:mx-8">
            {JOBDATA.map((el) => {
              if (isAuthenticated) {
                return (
                  <Link to={'/job-details'} state={{ jobName: el.jobName, jobDetails: el.jobDetails, image: el.image }}>
                    <JobCard key={el.jobId} jobName={el.jobName} jobDetails={el.jobDetails} image={el.image} />
                  </Link>
                )
              }
              else {
                return (
                  <JobCard key={el.jobId} jobName={el.jobName} jobDetails={el.jobDetails} image={el.image} />
                )
              }
            })}
            {/* {isAuthenticated && <Link to={'/job-details'}><JobCard /></Link>} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
