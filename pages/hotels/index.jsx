import Header1 from "@/components/Header1"
import Hotel from "@/components/Hotel"


const Hotels = () => {
  return (
    <>
        <Header1/>
        <div className="mt-8">
        <Hotel/>
        <Hotel/>
        <Hotel/>
        </div>
    </>
  )
}

export default Hotels