export default function Dashboard() {
    function todayDate(){
        Date.prototype.getDay()
        Date.prototype.getDate()
        Date.prototype.getMonth()
        Date.prototype.getFullYear()
    }
    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Dashboard</h1>

            <div className="mt-3">
                <h3>Welcome, Vinix <span className="float-end">Mon, 10 Jun 2024</span></h3>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className=" grid grid-rows-2 gap-3">
                    <div className="grid grid-cols-2 gap-3">
                        <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Total Menus</p>
                        <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Total Revenue</p>
                    </div>
                    <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Orders Summary</p>
                </div>
                <div className=" grid grid-rows-2 gap-3">
                    <div className="grid grid-cols-2 gap-3">
                        <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Total Orders</p>
                        <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Total Customers</p>
                    </div>
                    <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold">Revenue</p>
                </div>
            </div>
            <div className="mt-3">
                <p className="bg-white rounded-md text-xs shadow-md p-3 font-semibold w-full">Unique Visits Over Time</p>    
            </div>
        </div>
    )
}