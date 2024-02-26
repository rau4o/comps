import classNames from 'classnames';

function Panel({children, className, ...res}) {
    const finalClassName = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return (
        <div {...res} className={finalClassName}>{children}</div>
    )
}

export default Panel
