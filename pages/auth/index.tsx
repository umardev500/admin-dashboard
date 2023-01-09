import { NextPage } from 'next'

const Auth: NextPage = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-20 max-w-xs w-80">
                <div className="text-center">
                    <h1 className="roboto font-medium text-gray-700 text-4xl">Login</h1>
                    <div className="mt-2 text-gray-600 roboto">Authentication needed for access</div>
                </div>
                <div className="mt-7">
                    <div className="flex">
                        <input
                            className="w-full border border-gray-200 focus:ring-2 ring-indigo-400  outline-none px-4 py-2 rounded-md text-gray-500 text-base font-medium roboto"
                            type="text"
                            placeholder="Type username"
                            value={'umardev500'}
                        />
                    </div>
                    <div className="flex mt-2">
                        <input
                            className="w-full border border-gray-200 focus:ring-2 ring-indigo-400  outline-none px-4 py-2 rounded-md text-gray-500 text-base font-medium roboto"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <button className="bg-indigo-500 hover:bg-indigo-600 w-full mt-4 p-2 rounded-md outline-none text-gray-100 hover:text-gray-50 font-medium roboto">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth
