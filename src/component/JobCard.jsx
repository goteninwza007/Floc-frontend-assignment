export default function JobCard({ jobName, jobDetails, image }) {
    return (
        <div className="w-full flex justify-center items-center mx-auto">
            <div className="w-[90%] lg:w-[80%] xl:w-[90%] h-full bg-white rounded-2xl border-2 border-black drop-shadow-[4px_4px_rgba(0,0,0,1)] flex flex-col p-5 hover:bg-[#E7DFD3] cursor-pointer">
                <div className="">
                    <img className="rounded-2xl object-cover h-60 w-80 mx-auto" src={image} />
                </div>
                <div className="text-bold text-2xl mt-2 h-16">{jobName}</div>
                <div className="h-20 text-lg">
                    {jobDetails.map((el) => {
                        return (
                            <div>{el}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
