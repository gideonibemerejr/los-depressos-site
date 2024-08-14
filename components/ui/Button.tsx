import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("bg-transparent px-3 py-2 border-2", {
	variants: {
		variant: {
			default:
				"hover:bg-primaryOrange hover:text-primaryGreen text-primaryOrange border-primaryOrange",
			green:
				"hover:bg-primaryGreen hover:text-primaryOrange text-primaryGreen border-primaryGreen",
			brown:
				"hover:bg-primaryBrown hover:text-primaryCream text-primaryBrown border-primaryBrown",
			cream:
				"hover:bg-primaryCream hover:text-primaryBrown text-primaryCream border-primaryCream",
		},
		defaultVariants: {
			variant: "default",
		},
	},
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			children,
			className,
			variant = "default",
			disabled,
			...rest
		} = props;
		return (
			<button
				disabled={disabled}
				type="button"
				className={cn(buttonVariants({ variant, className }), className)}
				ref={ref}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
