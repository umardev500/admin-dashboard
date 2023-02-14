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
                <div className="grid grid-cols-full lg:grid-cols-2 gap-5 mb-5">
                    <div>
                        <div className="flex text-gray-500">
                            <span>Nama Depan</span>
                            <span className="text-red-400">*</span>
                        </div>
                        <input
                            type="text"
                            className="border outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg"
                            placeholder="Masukan nama depan"
                        />
                    </div>
                    <div>
                        <div className="flex text-gray-500">
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

                <div className="grid grid-cols-full lg:grid-cols-2 gap-5 mb-5">
                    <div>
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
                    <div>
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

                <div className="grid grid-cols-full lg:grid-cols-2 gap-5 mb-5">
                    <div>
                        <div className="flex text-gray-500">
                            <span>Gender</span>
                        </div>
                        <div className="flex flex-wrap gap-5 mt-2">
                            <div className="flex flex-1 whitespace-nowrap text-gray-500 items-center px-4 h-12 border rounded-lg">
                                <input type="radio" name="gender" className="w-4 h-4 bg-red-500 m-0 p-0" />
                                <span className="ml-4">L</span>
                            </div>
                            <div className="flex flex-1 whitespace-nowrap text-gray-500 items-center px-4 h-12 border rounded-lg">
                                <input type="radio" name="gender" className="w-4 h-4 bg-red-500 m-0 p-0" />
                                <span className="ml-4">P</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex text-gray-500">
                            <span>ID Pengguna</span>
                        </div>
                        <input
                            type="text"
                            disabled
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
