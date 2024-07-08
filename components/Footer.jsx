

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="h-28 flex items-center bg-gray-200 justify-center text-2xl">
        All rights are reserved . &copy; {currentYear}. 
    </div>
  )
}

export default Footer