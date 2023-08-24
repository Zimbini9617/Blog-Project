import React, {useStete} from 'react';

const Auth = () => {
  const [isSignup, setIsSignup] = useStete(false);

  const handleToggle = ()=>{
    setIsSignup(!isSignup);
  };
  return (
    <div>
      <div className='max-w-lg w-full space-y-8 mx-auto'>
        <div>
          <h2 className='mt-6 text-center text-3xl text-gray-700 font-bold font-mono'>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        </div>
        <form className='mt-6 space-y-6'>
          <div>
            {isSignup ? ( <div>
              <label htmlFor="name" className='font-bold'>Name:</label>
              <input type="text" id='name' name='name' autoComplete='name' required className='appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg' />
            </div>
            ) : (
              ''
          )}
            <div>
              <label htmlFor="email" className='font-bold'>Email:</label>
              <input type="text" id='email' name='email' autoComplete='email' required className='appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg' />
            </div>
            <div>
              <label htmlFor="password" className='font-bold'>Password:</label>
              <input type="text" id='password' name='password' autoComplete='password' required className='appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg' />
            </div>
            <div>
            <button type='submit' className='bg-green-800 hover:bg-green-600 text-white font-bold font-mono px-4 py-2 rounded-lg border border-gray-500 mt-6 focus:outline-none focus:underline'>SUBMIT</button>
            </div>
            <div className='mt-4'>
              <button type='button' onClick={handleToggle}>{isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth