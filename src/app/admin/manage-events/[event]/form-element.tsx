import React from "react";

const FormElement = ({
    name,
    value,
    type,
    id,
    onChange,
    width,
    disabled,
    placeholder,
}: {
    name: string;
    value: string;
    type: string;
    id: string;
    width?: string;
        disabled?: boolean;
        placeholder?: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}) => {
    return (
        <div className="flex flex-row flex-wrap  items-center justify-start gap-1 md:gap-5">
            <label htmlFor={id} className="text-base text-white   tracking-widest font-semibold md:text-lg">
                {name} :
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder={placeholder}
                name={id}
                disabled={disabled}
                id={id}
                className={`w-[${width}] rounded-md border-x-0 border-b border-t-0 text-white border-gray-300  bg-body px-2 py-1   focus:outline-none max-md:w-full `}
            />
        </div>
    );
};
export default FormElement;
