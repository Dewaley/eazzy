import can1 from "../../assets/can1.png"
import can2 from "../../assets/can2.png"

const WhoCan = () => {

    const items = [
        {
            details: "Resturants and small food bussinesses can shop with eazzy on pre- ordr and order in bulk",
            image: can1,
        },
        {
            details: "Individual cuatomers can use eazzy to shop groceries on pre-order and order basis",
            image: can2,
        }
]

  return (
      <div className="flex flex-col items-center gap-12">
          <h4 className="text-3xl font-medium">Who can use Eazzy?</h4>
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