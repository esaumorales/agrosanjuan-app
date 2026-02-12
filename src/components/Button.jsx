import { Link } from 'react-router-dom';

export default function Button(props) {
    const variant = props.variant || 'primary' || 'secondary' || 'outline' || 'link';
    const className = variant === 'primary' ? 'bg-green-500 ' :
        variant === 'secondary' ? 'bg-white text-green-500' :
            variant === 'outline' ? 'bg-transparent border border-green-500 text-green-500' :
                variant === 'link' ? 'bg-transparent text-gray-600 border border-gray-300 ' : 'bg-green-500 text-gray-600 ';
    const size = props.size || 'md' || 'lg';
    const sizeClass = size === 'md' ? 'px-4 py-2' : 'px-6 py-3';
    const rounded = props.rounded || 'md' || 'full';
    const roundedClass = rounded === 'md' ? 'rounded-md' : 'rounded-full';
    const onClick = props.onClick || (() => { });
    const disabled = props.disabled || false;
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const link = props.link || '';
    return (
        <Link to={link} className={className + ' ' + sizeClass + ' ' + roundedClass + ' ' + disabledClass} onClick={onClick} disabled={disabled}>
            {props.text}
        </Link>
    );
}