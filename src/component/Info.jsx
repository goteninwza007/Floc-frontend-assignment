import Info_image from '/info_image.png'
export default function Info() {
    return (
        <div className="bg-[#E7DFD3] py-8 md:py-24 xl:py-36 w-full flex justify-center">
            <div className="container h-full flex flex-row px-8 sm:px-18 xl:px-24">
                <div className="w-[40%] h-full flex flex-col my-auto">
                    <div className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-semibold">Find your flexible top talent</div>
                    {/* <div className="text-6xl font-semibold mt-2">top talent</div> */}
                    <div className="md:mt-3 text-xs md:text-xl w-[85%]">lorem ipsum dolor sit amet consectetur. Quis integer parturient senectus varius id.</div>
                </div>
                <div className="w-[60%] h-full my-auto">
                    <img className='w-full' src={Info_image} />
                </div>
            </div>
        </div>
    )
}
