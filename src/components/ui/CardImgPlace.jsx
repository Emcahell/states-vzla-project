const CardImgPlace = ({ className, children }) => {
  return (
    <>
    <div className={`relative h-30 sm:h-56 overflow-hidden ${className}`}>
      {children}
    </div>
    </>
  )
}

export default CardImgPlace;