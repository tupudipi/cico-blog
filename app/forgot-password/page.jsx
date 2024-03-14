
const page = () => {
    return (
        <div className="grow mt-8 flex flex-col items-center h-screen md:h-auto gap-4">
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold leading-10'>Forgot your password?</h1>
            </div>

            <div className='p-5 rounded-lg shadow-lg w-full md:max-w-md'>
                <form action="" method="post" className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">What's your email address?</label>
                        <input type="email" name="email" id="email" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all'>Send Reset Link</button>
                </form>
            </div>
        </div>
    )
}

export default page