import { Link } from 'react-router-dom';

const VARIANTS = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-white text-green-500 border border-green-500 hover:bg-green-50',
    outline: 'bg-transparent border border-green-500 text-green-500 hover:bg-green-50',
    link: 'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100',
    submit: 'bg-green-500 text-white cursor-pointer hover:bg-green-600 justify-center ',
};

const SIZES = {
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

const ROUNDED = {
    md: 'rounded-md',
    full: 'rounded-full',
};

export default function Button({
    text,
    variant = 'primary',
    size = 'md',
    rounded = 'md',
    link,
    onClick,
    disabled = false,
    className = '',
    type = 'button',
    ...props
}) {
    const variantClasses = VARIANTS[variant] || VARIANTS.primary;
    const sizeClasses = SIZES[size] || SIZES.md;
    const roundedClasses = ROUNDED[rounded] || ROUNDED.md;
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

    const combinedClassName = `${variantClasses} ${sizeClasses} ${roundedClasses} ${disabledClasses} ${className} inline-flex items-center transition-colors duration-200`;

    if (link) {
        return (
            <Link
                to={link}
                className={combinedClassName}
                onClick={onClick}
                aria-disabled={disabled}
                {...props}
            >
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
}   