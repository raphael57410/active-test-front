import React from "react";

export type TInputProps<T = string> = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    innerRef?: any;
    value?: any;
    onValueChange?: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void;
    endIcon?: string;
    full?: boolean;
    width?: string;
    autoCompleteOff?: boolean;
    className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
    ({ className, value, endIcon, onValueChange, onChange, full, ...props }, ref) => {
        return (
            <div className={"relative w-full"}>
                <input
                    autoComplete={props.autoCompleteOff ? "off" : undefined}
                    ref={props.innerRef}
                    value={value ?? ""}
                    {...props}
                    className={"h-10 pl-2 border-2 border-solid border-stone-300 rounded-md focus:border-lightBlue disabled:bg-stone-200 disabled:opacity-60"}
                    onChange={(event) => {
                        if (onChange) onChange(event);
                        if (onValueChange) onValueChange(event.target.value, event);
                    }}
                />
            </div>
        );
    },
);

Input.displayName = "Input";
