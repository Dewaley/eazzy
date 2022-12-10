import can1 from "../../assets/can1.png"
import can2 from "../../assets/can2.png"

const WhoCan = () => {

    const items = [
        {
            details: "Resturants and small food bussinesses can procure fresh food items in bulk on a schedule & make their orders recurring",
            image: can1,
        },
        {
            details: "Individual customers can buy fresh foods and groceries instantly or recieve orders on a convenient schedule",
            image: can2,
        }
]

  return (
      <div className="flex flex-col items-center gap-12">
          <h4 className="text-3xl font-medium">Built for Ambitious Food Businesses</h4>
          <div className="grid md:grid-cols-2 divide-x-2 gap-y-6">
              {items.map((item,index)=>(<div className="flex flex-col items-center gap-3 py-4">
                  <img src={item.image} alt="" className="w-[60%]" />
                  <p className="w-[60%]" >{item.details}</p>
              </div>))}
          </div>
    </div>
  )
}

export default WhoCan