import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useRef, useState } from 'react'
import { useDetectOutsideClick } from '../../hooks'

const Auth: NextPage = () => {
    const [isPassOn, setIsPassOn] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const wrapRef = useRef<HTMLDivElement>(null)
    const passRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useDetectOutsideClick({ parent: wrapRef, target: passRef, setState: setIsPassOn, toActivate: true })

    const handleEyeClick = useCallback((): void => {
        setShowPass((prev) => !prev)
        const input = inputRef.current
        if (input !== undefined && input !== null) {
            setTimeout(() => {
                input?.focus()
            }, 10)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Auth</title>
            </Head>
            <div className="flex justify-center" ref={wrapRef}>
                <div className="mt-20 max-w-xs w-80">
                    <div className="text-center">
                        <h1 className="roboto font-medium text-gray-700 text-4xl">Login</h1>
                        <div className="mt-2 text-gray-500 roboto">Authentication needed for access</div>
                    </div>
                    <div className="mt-7">
                        <div className="flex">
                            <input
                                className="w-full border border-gray-200 focus:border-indigo-200 focus:ring-2 ring-indigo-400  outline-none px-4 py-2 rounded-md text-gray-500 text-base font-medium roboto"
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div
                            ref={passRef}
                            className={`flex px-4 py-2 relative rounded-md mt-2 items-center border border-gray-200 ${isPassOn ? 'ring-2 ring-indigo-400' : ''} bg-white`}
                        >
                            <input
                                ref={inputRef}
                                className="w-full outline-none rounded-md text-gray-500 text-base font-medium roboto"
                                type={showPass ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            {isPassOn ? (
                                <>
                                    <span onClick={handleEyeClick} className="text-gray-300 cursor-pointer absolute right-2.5">
                                        {showPass ? (
                                            <svg width="22" height="22" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.3646 8.76874C18.1508 5.28999 14.9117 3.28708 11.5 3.28708C9.79416 3.28708 8.13624 3.78541 6.62207 4.715C5.10791 5.65416 3.74707 7.02458 2.63541 8.76874C1.67707 10.2733 1.67707 12.7171 2.63541 14.2217C4.84916 17.71 8.08832 19.7033 11.5 19.7033C13.2058 19.7033 14.8637 19.205 16.3779 18.2754C17.8921 17.3362 19.2529 15.9658 20.3646 14.2217C21.3229 12.7267 21.3229 10.2733 20.3646 8.76874V8.76874ZM11.5 15.3717C9.35332 15.3717 7.62832 13.6371 7.62832 11.5C7.62832 9.36291 9.35332 7.62833 11.5 7.62833C13.6467 7.62833 15.3717 9.36291 15.3717 11.5C15.3717 13.6371 13.6467 15.3717 11.5 15.3717Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M11.4981 8.75916C10.7725 8.75916 10.0765 9.04742 9.56342 9.56052C9.05032 10.0736 8.76205 10.7696 8.76205 11.4952C8.76205 12.2208 9.05032 12.9168 9.56342 13.4299C10.0765 13.943 10.7725 14.2312 11.4981 14.2312C13.0027 14.2312 14.2389 13.0046 14.2389 11.5C14.2389 9.9954 13.0027 8.75916 11.4981 8.75916V8.75916Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        ) : (
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.3847 8.79557C20.1068 8.35474 19.8097 7.94266 19.503 7.55932C19.4194 7.45327 19.3142 7.3661 19.1945 7.30353C19.0748 7.24096 18.9432 7.20441 18.8084 7.19626C18.6736 7.18812 18.5385 7.20857 18.4122 7.25627C18.2858 7.30398 18.1709 7.37786 18.0751 7.47307L15.2001 10.3481C15.411 10.9806 15.4493 11.7089 15.2576 12.466C15.0864 13.136 14.738 13.7475 14.249 14.2365C13.76 14.7255 13.1484 15.0739 12.4785 15.2452C11.7214 15.4368 10.993 15.3985 10.3605 15.1877L8.00304 17.5452C7.52387 18.0243 7.67721 18.8677 8.31929 19.1168C9.34471 19.5097 10.4085 19.711 11.501 19.711C13.2068 19.711 14.8647 19.2127 16.3789 18.2831C17.9218 17.3247 19.3114 15.916 20.4326 14.1239C21.343 12.6768 21.2951 10.2427 20.3847 8.79557V8.79557ZM13.4358 9.56416L9.56416 13.4358C9.07541 12.9375 8.75916 12.2475 8.75916 11.5C8.75916 9.99541 9.98583 8.75916 11.5 8.75916C12.2475 8.75916 12.9375 9.07541 13.4358 9.56416Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M17.4896 5.51041L14.2408 8.75916C13.8824 8.39751 13.4553 8.11117 12.9846 7.91697C12.5139 7.72278 12.0092 7.62464 11.5 7.62833C9.35333 7.62833 7.62833 9.36291 7.62833 11.5C7.62833 12.5733 8.05958 13.5412 8.75916 14.2408L5.52 17.4896H5.51041C4.44666 16.6271 3.46916 15.525 2.63541 14.2217C1.67708 12.7171 1.67708 10.2733 2.63541 8.76874C3.74708 7.02458 5.10791 5.65416 6.62208 4.715C8.13625 3.795 9.79416 3.28708 11.5 3.28708C13.6371 3.28708 15.7071 4.07291 17.4896 5.51041ZM14.2389 11.4981C14.2389 13.0027 13.0122 14.2389 11.4981 14.2389C11.4406 14.2389 11.3927 14.2389 11.3352 14.2197L14.2197 11.3352C14.2389 11.3927 14.2389 11.4406 14.2389 11.4981Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M20.862 2.13613C20.5745 1.84863 20.1049 1.84863 19.8174 2.13613L2.13613 19.827C1.84863 20.1145 1.84863 20.584 2.13613 20.8715C2.20435 20.9395 2.28541 20.9933 2.3746 21.0297C2.46379 21.066 2.55932 21.0843 2.65563 21.0834C2.75195 21.0825 2.84712 21.0625 2.93562 21.0245C3.02412 20.9864 3.10417 20.9312 3.17113 20.862L20.862 3.17113C21.159 2.88363 21.159 2.42363 20.862 2.13613V2.13613Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                </>
                            ) : null}
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 w-full mt-4 p-2 rounded-md outline-none text-gray-100 hover:text-gray-50 font-medium roboto">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
