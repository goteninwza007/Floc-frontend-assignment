import { useRef, useEffect, useState } from "react";
export default function LoginModal({ showModal, setShowModal, handleLogin }) {
    const refModal = useRef(null)
    const [onFocusEmail, setOnFocusEmail] = useState(false)
    const [onFocusPassword, setOnFocusPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        handleLogin(email, password)
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (refModal.current && !refModal.current.contains(e.target)) {
                setShowModal(false)
                setEmail('')
                setPassword('')
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                    >
                        <div className="z-50 relative my-6 w-full sm:w-1/2 lg:w-2/3 xl:w-[28%] mx-auto max-w-3xl" ref={refModal}>
                            {/*content*/}
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <form onSubmit={(event) => handleSubmitLogin(event)} className="px-12 flex flex-col">
                                    <div className="w-full text-center text-3xl text-bold pb-6 pt-14">Log in</div>
                                    <div className="py-1">
                                        <div className="relative flex items-center">
                                            <input type='text' placeholder='Your email' value={email}
                                                className="pr-4 pl-14 py-2.5 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#000000]"
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={() => setOnFocusEmail(true)}
                                                onBlur={() => setOnFocusEmail(false)}
                                            />
                                            <div className="absolute left-4">
                                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className={onFocusEmail ? "fill-[#000000]" : "fill-[#ADB0CD]"} d="M16.5356 1.64094C16.5356 0.738425 15.7915 0 14.8821 0H1.65356C0.744104 0 0 0.738425 0 1.64094V11.4866C0 12.3891 0.744104 13.1276 1.65356 13.1276H14.8821C15.7915 13.1276 16.5356 12.3891 16.5356 11.4866V1.64094ZM14.8821 1.64094L8.26782 5.7433L1.65356 1.64094H14.8821ZM14.8821 11.4866H1.65356V3.28189L8.26782 7.38425L14.8821 3.28189V11.4866Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-1">
                                        <div className="relative flex items-center">
                                            <input type='password' placeholder='Password' value={password}
                                                className="pr-4 pl-14 py-2.5 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#000000]"
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setOnFocusPassword(true)}
                                                onBlur={() => setOnFocusPassword(false)}
                                            />
                                            <div className="absolute left-4">
                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className={onFocusPassword ? "stroke-[#000000]" : "stroke-[#ADB0CD]"} d="M12.6516 8.9098L14.1081 10.2281L17.021 7.5915L15.5646 6.27319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={onFocusPassword ? "stroke-[#000000]" : "stroke-[#ADB0CD]"} d="M8.45776 8.7503L17.0204 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={onFocusPassword ? "stroke-[#000000]" : "stroke-[#ADB0CD]"} d="M5.36942 15.5014C7.78258 15.5014 9.73883 13.7307 9.73883 11.5465C9.73883 9.36222 7.78258 7.59155 5.36942 7.59155C2.95625 7.59155 1 9.36222 1 11.5465C1 13.7307 2.95625 15.5014 5.36942 15.5014Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-1 pb-16">
                                        <button type="submit" className="w-full bg-[#34A853] rounded text-bold text-sm py-2 text-white">Log In</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
                </>
            ) : null}
        </>
    );
}