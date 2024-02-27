import { useEffect, useContext } from "react"
import AuthContext from "@/context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
export default function JobDetails() {
    let { state } = useLocation();
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthContext)
    useEffect(() => {
        const userAuth = JSON.parse(localStorage.getItem('Auth'));
        if (!userAuth?.isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='container'>
                    <div className='mt-6 text-2xl xl:text-4xl font-extrabold py-4 mx-8 sm:mx-12 xl:mx-0'>job details</div>
                    <div className="mt-6 w-[90%] xl:w-full h-1/2 bg-white rounded-[38px] border-2 border-black drop-shadow-[9px_9px_rgba(0,0,0,1)] flex flex-row p-4 xl:p-12 mx-auto">
                        <div className="h-full w-1/2">
                            <img className="object-cover rounded-2xl h-full xl:w-full" src={state.image} />
                        </div>
                        <div className="flex flex-col ml-4 xl:ml-8 w-1/2">
                            <div className="text-bold text-lg sm:text-3xl lg:text-4xl xl:text-5xl h-20 xl:h-36 text-[#262626]">{state.jobName}</div>
                            <div className="h-20 sm:text-xl lg:text-2xl xl:text-4xl h-28 xl:h-40 text-[#262626]">
                                {state.jobDetails.map((el) => {
                                    return (
                                        <div>{el}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex justify-end mx-8 sm:mx-12 xl:mx-0'>
                        <button onClick={() => navigate('/')} className="bg-[#262626] hover:bg-[#656565] text-white px-8 py-4 rounded-full text-xl sm:text-2xl xl:text-3xl font-medium">back to job list</button>
                    </div>
                </div>
            </div>
        </>
    )
}
