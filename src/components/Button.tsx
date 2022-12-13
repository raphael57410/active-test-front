import React, { ReactNode } from "react";
import clsx from "clsx";

export type TButtonProps<T = string> = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    icon?: { src: string; width: number; height: number };
    iconComponent?: ReactNode;
    height: "sm" | "md" | "lg";
    content?: string | ReactNode;
    onClick?: (data: any) => void;
    type: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    secondaryBtn?: boolean;
    className?: string;
    disabled?: boolean;
    link?: string;
    color?: "primary" | "secondary" | "base";
    children?: ReactNode | string;
};

export const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(({ ...props }, ref) => {
    let height = "h-10";
    if (props.height) {
        if (props.height === "sm") height = "h-8";
        if (props.height === "md") height = "h-10";
        if (props.height === "lg") height = "h-16";
    }

    const button = (
        <button
            ref={ref}
            type={props.type}
            className={clsx(
                "bg-red-500 whitespace-nowrap rounded-full font-semibold scale-98 active:scale-98 flex items-center font-ubuntu box-border hover:scale-100 ease-in-out duration-300",
                height,
                props.className,
                {
                    ["border-2 border-solid bg-none"]: props.secondaryBtn,
                    ["text-white"]: !props.secondaryBtn,
                    ["w-full"]: props.fullWidth,
                    ["w-fit"]: !props.fullWidth,
                    ["justify-center"]: !props.icon,
                    ["px-0"]: props.height === "sm",
                    ["md:px-6 px-4 text-lg"]: props.height !== "sm",
                    ["jutify-between"]: props.icon,
                    ["bg-orangeAction "]: !props.color && !props.secondaryBtn,
                    ["text-orangeAction border-orangeAction hover:text-orangeActionLight hover:border-orangeActionLight"]:
                    !props.color && props.secondaryBtn,
                    ["bg-lightBlue hover:bg-lightBlueLight"]: props.color === "secondary",
                    ["text-lightBlue border-lightBlue hover:text-lightBlueLight hover:border-lightBlueLight"]:
                    props.color === "secondary" && props.secondaryBtn,
                    ["text-textBlue border-textBlue hover:text-textBlueLight hover:border-textBlueLight"]:
                    props.color === "base" && props.secondaryBtn,
                },
            )}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.content}
            {props.iconComponent && <div className={"ml-2"}>{props.iconComponent}</div>}
        </button>
    );
    return button
});
Button.displayName = "Button";
