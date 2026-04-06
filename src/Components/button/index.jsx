export const Button = ({ children, variant = 'primary', isBold = false, className = '' }) => {
  return (
    <button className={`flex items-center justify-center p-4 rounded-[35px] font-graphik text-xl leading-5 ${className} ${
        variant === 'primary' 
          ? 'bg-primary text-white' 
          : 'bg-white text-primary'
      }
      ${isBold && 'font-graphik-bold'}
      ${className}
      `}
      > 
      {children}
    </button>
  )
}

export default Button;