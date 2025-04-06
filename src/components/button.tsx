import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classess = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-line-400 hover:bg-lime-500",
            secondary: "border-white text-white bg-transparent hover:bg-white/10",
        },
        size: {
            sm: "h-10",
        },
    },
});

const Button = (
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, size, ...rest } = props;

    return (
        <button className={classess({ variant, className, size })} {...rest} />
    );
};

export default Button;