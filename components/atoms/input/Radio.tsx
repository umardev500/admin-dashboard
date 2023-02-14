import React from 'react'

interface Props {
    title?: string
    disabled?: boolean
    required?: boolean
    name: string
}

export const Radio: React.FC<Props> = ({ name, title, disabled = false, required = false }) => {
    return (
        <div className="flex flex-1 bg-white whitespace-nowrap text-gray-500 items-center px-4 h-12 border rounded-lg">
            <input type="radio" name={name} disabled={disabled} required={required} className="w-4 h-4 bg-red-500 m-0 p-0" />
            <span className="ml-4">{title}</span>
        </div>
    )
}
