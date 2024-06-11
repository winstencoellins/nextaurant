export default function Login() {
    return (
        <div className="w-11/12 lg:w-4/12 mx-auto h-screen flex justify-center items-center">
            <div className="w-full bg-white px-10 py-10 rounded-lg">
                <h1 className="font-semibold text-3xl text-center mb-2">Sign In</h1>
                <p className="text-center mb-10">Please sign-in to start your order</p>

                <form>
                    <div className="flex flex-col mb-5">
                        <label>Username</label>
                        <input type="text" placeholder="johndoe" className='px-3 py-3 rounded-xl mt-1 border border-slate-300' name='username' /> 
                    </div>
                    <div className="flex flex-col mb-5">
                        <label>Password</label>
                        <input type="password" placeholder="••••••" className='px-3 py-3 rounded-xl mt-1 border border-slate-300' name='username' /> 
                    </div>

                    <button type="submit" className="bg-black text-white w-full py-3 rounded-xl mt-5">Login</button>
                </form>
            </div>
        </div>
    )
}