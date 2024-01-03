import React from 'react';
import { Link } from 'react-router-dom';

const TYPE = {
    primary: ' text-white bg-red-600 hover:bg-red-700',
    outline: ' text-red-400 bg-white border-[1px] border-red-600 hover:bg-red-50',
    text: ' hover:underline',
}

const SIZE = {
    xs: ' py-[2px] px-3 text-sm min-w-[66px]',
    sm: ' py-[4px] px-4 text-sm min-w-[88px]',
    md: ' py-[6px] px-4 text-base min-w-[100px]',
    lg: ' py-[11px] px-4 text-xl min-w-[124px]',
    xl: ' py-[14px] px-4 text-2xl min-w-[140px]'
}

function Button({ to, href, onClick, leftIcon, rightIcon, disabled = false, children, size = 'md', text = false, primary = false, outline = false, className, ...passProps }) {
    let Comp = 'button';
    let buttonClassName = `inline-flex items-center justify-center font-bold rounded ${className || ''} ${disabled ? 'pointer-events-none select-none opacity-50' : 'cursor-pointer'}`;

    if (primary) {
        buttonClassName += TYPE.primary;
    }
    else if (outline) {
        buttonClassName += TYPE.outline;
    }
    else if( text) {
        buttonClassName += TYPE.text;
    }

    if (size) {
        switch (size) {
            case 'xs':
                buttonClassName += SIZE.xs;
                break;
            case 'sm':
                buttonClassName += SIZE.sm;
                break;
            case 'md':
                buttonClassName += SIZE.md;
                break;
            case 'lg':
                buttonClassName += SIZE.lg;
                break;
            case 'xl':
                buttonClassName += SIZE.xl;
                break;
            default:
                break;
        }
    }

    const props = {
        onClick,
        ...passProps,
    };

    if(disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={buttonClassName} {...props}>
            {leftIcon && <span>{leftIcon}</span>}
            <span className='mx-2'>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;