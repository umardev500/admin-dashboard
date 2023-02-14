import Head from 'next/head'
import { ReactElement } from 'react'
import { Dashboard, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Profiles: NextPageWithLayout = () => {
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
                            className="border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
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
                            className="border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
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
                            className="border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
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
                            className="border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
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
