export default function Badge({ 
    children, 
    variant = "default", 
    size = "md", 
    className = "",
    style = {}
}) {

    const variants = {
        default: "bg-gray-100 text-gray-800",
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-600",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
        info: "text-[#00538A]",
        custom: "" 
    };

    const sizes = {
        xs: "text-xs",
        sm: "text-sm", 
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
    };


    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium";
    
    // Default style for info variant (HDFC badge)
    const defaultStyle = variant === 'info' ? {
        width: '98px',
        height: '24px',
        borderRadius: '8px',
        paddingTop: '4px', // Spacing/1
        paddingRight: '8px', // Spacing/3
        paddingBottom: '4px', // Spacing/1
        paddingLeft: '8px', // Spacing/3
        background: '#D1EDFF',
        gap: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        ...style
    } : style;
    

    const textStyle = variant === 'info' ? {
        width: '82px',
        height: '16px',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: 'normal',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00538A'
    } : {};
    
    // Combine classes
    const badgeClasses = `
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
        <span 
            className={badgeClasses}
            style={defaultStyle}
        >
            <span style={textStyle}>
                {children}
            </span>
        </span>
    );
}
