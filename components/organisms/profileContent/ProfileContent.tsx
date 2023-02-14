import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AppContext, AppContextType } from '../../../contexts'
import { notify } from '../../../helpers'
import { BasicAPIResponse, modifyingResponse, UserDetail } from '../../../types'
import { Input, Radio } from '../../atoms'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const ProfileContent: React.FC = () => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [])

    const ctx = useContext(AppContext) as AppContextType
    const userData = ctx.userData
    const userId = userData?.user_id
    const detail = userData?.detail

    const name = detail?.name.split(' ')
    const [lastName, setLastName] = useState<string | undefined>('')
    const [firstName, setFirstName] = useState<string | undefined>('')
    const [email, setEmail] = useState<string | undefined>('')
    const [phone, setPhone] = useState<string | undefined>('')
    const [gender, setGender] = useState<string | undefined>('')

    useEffect(() => {
        setLastName(name?.pop())
        setFirstName(name?.join(' '))
        setEmail(detail?.email)
        setPhone(detail?.phone)
        setGender(detail?.gender)
    }, [detail?.name, detail?.email, detail?.phone, detail?.gender])

    const fNameRef = useRef<HTMLInputElement>(null)
    const lNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const maleRef = useRef<HTMLInputElement>(null)
    const femaleRef = useRef<HTMLInputElement>(null)

    const inputs = [fNameRef, lNameRef, emailRef, phoneRef]

    const checkValue = (): boolean => {
        let ok = true
        for (let i = 0; i < inputs.length; i++) {
            const val = inputs[i].current?.value
            if (val === '') {
                ok = false
                break
            }
        }

        return ok
    }

    const checkForChanged = (fNameValue: string, lNameValue: string, emailValue: string, phoneValue: string, genderSelected: string): boolean => {
        let ok = true

        const changedFname = fNameValue !== firstName
        const changedLName = lNameValue !== lastName
        const changedEmail = emailValue !== email
        const changedPhone = phoneValue !== phone
        const changedGender = genderSelected !== gender

        // Check for have not changing
        if (!(changedFname || changedLName || changedEmail || changedPhone || changedGender)) {
            ok = false
        }

        return ok
    }

    const fetchPost = async (name: string, email: string, phone: string, gender: string): Promise<void> => {
        const target = `${MEMBERSHIP_API}/users/${userId ?? '000'}/detail`
        const userDetail: Omit<UserDetail, 'avatar' | 'location'> = {
            name,
            email,
            phone,
            gender,
        }
        const reqBody = JSON.stringify(userDetail)

        try {
            const response = await fetch(target, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: reqBody,
            })

            const jsonData: modifyingResponse & BasicAPIResponse = await response.json()
            const isUpdated = jsonData.data.is_affected
            if (isUpdated) notify.success('Data berhasil di update!', { className: 'roboto', position: 'bottom-right' })
            if (isUpdated) {
                const fullName = name.split(' ')
                setLastName(fullName.pop())
                setFirstName(fullName.join(' '))
                setEmail(email)
                setPhone(phone)
                setGender(gender)
            }
        } catch {}
    }

    const handleSave = (): void => {
        const ok = checkValue()

        if (!ok) {
            notify.error('Yg bertanda bintang tidak boleh kosong!', { position: 'bottom-right', className: 'roboto' })
            return
        }

        const fNameValue = fNameRef.current?.value ?? ''
        const lNameValue = lNameRef.current?.value ?? ''
        const emailValue = emailRef.current?.value ?? ''
        const phoneValue = phoneRef.current?.value ?? ''
        let genderSelected = ''
        if (maleRef.current?.checked === true) genderSelected = 'male'
        if (femaleRef.current?.checked === true) genderSelected = 'female'

        const isChanged = checkForChanged(fNameValue, lNameValue, emailValue, phoneValue, genderSelected)
        if (!isChanged) {
            notify.error('Tidak ada perubahan untuk di update!', { className: 'roboto', position: 'bottom-right' })
            return
        }

        const fullName = `${fNameValue} ${lNameValue}`.trim()
        fetchPost(fullName, emailValue, phoneValue, genderSelected).catch(() => {})
    }

    return (
        <div className="mt-4 mb-4">
            <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                <Input ref={fNameRef} title="Nama Depan" placeholder="Masukan nama depan" defaultValue={firstName} required />
                <Input ref={lNameRef} title="Nama Belakang" placeholder="Nama belakang" defaultValue={lastName} />
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                <Input ref={emailRef} title="Email" placeholder="schweinsteiger@gmail.com" defaultValue={email} required />
                <Input ref={phoneRef} title="Telepon" placeholder="+62 83879154310" defaultValue={phone} required />
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-5">
                <div className="flex-1">
                    <div className="flex text-gray-500">
                        <span>Gender</span>
                    </div>
                    <div className="flex lg:flex-row gap-2 mt-2">
                        <Radio ref={maleRef} name="gender" defaultValue="male" checked={gender === 'male'} title='Laki"' />
                        <Radio ref={femaleRef} name="gender" defaultValue="female" checked={gender === 'female'} title="Perempuan" />
                    </div>
                </div>
                <div className="flex-1">
                    <Input title="ID Pengguna" defaultValue={userId} disabled placeholder="+62 83879154310" />
                </div>
            </div>

            <div className="flex gap-2 mt-10 justify-end">
                <button onClick={handleBack} className="flex outline-none border items-center gap-2 hover:bg-gray-100 text-gray-500 px-4 py-1.5 rounded-lg">
                    <span>Kembali</span>
                </button>
                <button
                    onClick={handleSave}
                    className="flex outline-none border border-blue-500 items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg"
                >
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
    )
}
