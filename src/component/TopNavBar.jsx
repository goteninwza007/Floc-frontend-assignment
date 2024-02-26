import { useEffect, useState } from "react";
export default function TopNavBar({ setShowModal, handleLogout, isAuthenticated }) {
    return (
        <div className="bg-[#FFFDFA] drop-shadow-md h-16 w-full flex justify-between px-8">
            <div className="h-full flex justify-center items-center text-2xl font-bold">FLOC</div>
            <div className="flex justify-center items-center">
                {!isAuthenticated ? <div onClick={() => { setShowModal(true) }} className="text-xl text-[#34A853] border py-2 px-4 rounded-full border-[#34A853] cursor-pointer hover:bg-[#34A853] hover:text-white">
                    Log In
                </div> :
                    <div onClick={() => { handleLogout() }} className="text-xl text-[#34A853] border py-2 px-4 rounded-full border-[#34A853] cursor-pointer hover:bg-[#34A853] hover:text-white">
                        Log out
                    </div>}
            </div>
        </div>
    )
}
