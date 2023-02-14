import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useCallback } from 'react'
import { Dashboard, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Profiles: NextPageWithLayout = () => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [])

    return (
        <>
            <Head>
                <title>Address</title>
            </Head>
            <div className="mt-4 mb-4">
                <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                    <div className="flex-1">
                        <div className="flex text-gray-500 whitespace-nowrap">
                            <span>Nama Depan</span>
                            <span className="text-red-400">*</span>
                        </div>
                        <input
                            type="text"
                            className="border text-gray-500 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="Masukan nama depan"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex text-gray-500 whitespace-nowrap">
                            <span>Nama Belakang</span>
                            <span className="text-red-400">*</span>
                        </div>
                        <input
                            type="text"
                            className="border text-gray-500 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="Nama belakang"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                    <div className="flex-1">
                        <div className="flex text-gray-500">
                            <span>Email</span>
                            <span className="text-red-400">*</span>
                        </div>
                        <input
                            type="text"
                            className="border text-gray-500 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="schweinsteiger@gmail.com"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex text-gray-500">
                            <span>Telepon</span>
                            <span className="text-red-400">*</span>
                        </div>
                        <input
                            type="text"
                            className="border text-gray-500 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="+62 83879154310"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                    <div className="flex-1">
                        <div className="flex text-gray-500">
                            <span>Gender</span>
                        </div>
                        <div className="flex lg:flex-row gap-2 mt-2">
                            <div className="flex flex-1 bg-white whitespace-nowrap text-gray-500 items-center px-4 h-12 border rounded-lg">
                                <input type="radio" name="gender" className="w-4 h-4 bg-red-500 m-0 p-0" />
                                <span className="ml-4">Laki&quot;</span>
                            </div>
                            <div className="flex flex-1 bg-white whitespace-nowrap text-gray-500 items-center px-4 h-12 border rounded-lg">
                                <input type="radio" name="gender" className="w-4 h-4 bg-red-500 m-0 p-0" />
                                <span className="ml-4">Perempuan</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex whitespace-nowrap text-gray-500">
                            <span>ID Pengguna</span>
                        </div>
                        <input
                            type="text"
                            disabled
                            style={{ minWidth: 200 }}
                            className="bg-gray-100 border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="1667628876273876"
                        />
                    </div>
                </div>

                <div className="flex gap-2 mt-10 justify-end">
                    <button onClick={handleBack} className="flex outline-none border items-center gap-2 hover:bg-gray-100 text-gray-500 px-4 py-1.5 rounded-lg">
                        <span>Kembali</span>
                    </button>
                    <button className="flex outline-none border border-blue-500 items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_220_67)">
                                <path
                                    d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.0299 2.26501L6.11991 8.17501C5.89491 8.40001 5.66991 8.84251 5.62491 9.16501L5.30241 11.4225C5.18241 12.24 5.75991 12.81 6.57741 12.6975L8.83491 12.375C9.14991 12.33 9.59241 12.105 9.82491 11.88L15.7349 5.97001C16.7549 4.95001 17.2349 3.76501 15.7349 2.26501C14.2349 0.765006 13.0499 1.24501 12.0299 2.26501Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.1826 3.11249C11.4313 3.99559 11.9026 4.80004 12.5513 5.44877C13.2001 6.09751 14.0045 6.56879 14.8876 6.81749"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_220_67">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Simpan</span>
                    </button>
                </div>
            </div>
        </>
    )
}

Profiles.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>
                <ProfileLayout title="Pengaturan profil">{page}</ProfileLayout>
            </AccountLayout>
        </Dashboard>
    )
}

export default Profiles
