import React from 'react'

interface Props {
    title?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    className?: string
}

export const Input: React.FC<Props> = ({ title, placeholder, disabled = false, required = false, className = '' }) => {
    let disabledClasses = 'bg-gray-100'
    if (!disabled) disabledClasses = ''

    return (
        <div className={`flex-1 ${className}`}>
            <div className="flex text-gray-500">
                <span>{title}</span>
                {required ? <span className="text-red-400">*</span> : null}
            </div>
            <input
                type="text"
                disabled={disabled}
                required={required}
                className={`${disabledClasses} border text-gray-500 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 px-4 h-12 w-full mt-2 rounded-lg`}
                placeholder={placeholder}
            />
        </div>
    )
}
