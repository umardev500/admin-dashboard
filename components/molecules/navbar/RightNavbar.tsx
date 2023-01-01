import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Dropdown } from '../dropdown'

export const RightNavbar: React.FC = () => {
    const [avatarMenu, setAvatarMenu] = useState<boolean>(false)
    const navRef = useRef<HTMLUListElement>(null)

    const onDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, setDropdownToggle: React.Dispatch<React.SetStateAction<boolean>>): void => {
        e.preventDefault()

        // open
        setDropdownToggle((prev) => !prev)
    }

    return (
        <ul className="navigation flex" ref={navRef}>
            <li className="flex relative">
                <a onClick={(e) => onDropdownToggle(e, setAvatarMenu)} className="navigation-link avatar-item flex items-center px-4" href="#">
                    <Image src={'/assets/avatars/avatar.png'} width={38} height={38} alt="avatar" quality={100} priority />
                </a>
                {avatarMenu ? <Dropdown setState={setAvatarMenu} right /> : null}
            </li>
        </ul>
    )
}
