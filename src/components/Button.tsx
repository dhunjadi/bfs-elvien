import {PropsWithChildren, ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    varient: 'primary' | 'secondary' | 'tertiary';
    hasIcon?: boolean;
}

const Button = ({varient, hasIcon, disabled, children, ...props}: PropsWithChildren<ButtonProps>) => {
    const getModifier = (): string => {
        if (varient === 'secondary') return 'c-button--secondary';
        if (varient === 'tertiary') return 'c-button--tertiary';
        return 'c-button-primary';
    };

    return (
        <button className={`c-button ${disabled && 'is-disabled'} ${getModifier()}`} {...props}>
            {hasIcon && <div className="c-button__icon" />}
            {children}
        </button>
    );
};

export default Button;
