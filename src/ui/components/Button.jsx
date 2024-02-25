export function Button (props) {
    const { children, className, checked, onClick, disabled } = props;
    return <button className={`btn ${className}`}
                   onClick={onClick}
                   disabled={disabled}>
        {children}
    </button>
}