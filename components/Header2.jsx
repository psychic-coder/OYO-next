"use client"

const Header2 = () => {
    const List=[
        {
            id:1,
            name:"Bangalore"
        },
        {
            id:2,
            name:"Kolkata"
        },
        {
            id:3,
            name:"Mumbai"
        },
        {
            id:4,
            name:"Jaipur"
        },
        {
            id:5,
            name:"Delhi"
        },
        {
            id:6,
            name:"Kashmir"
        },
        {  
            id:7,
            name:"Hyderabad"
        },
    ]
  return (
    <div>
        <div className="flex px- bg-gray-100 justify-between px-2 ">
        {
            List.map(({id,name})=>{
                return (
                
                    <span key={id} >
                        {name}
                    </span>
                    
                )
            }
            )
        }
        </div>
    </div>
  )
}

export default Header2