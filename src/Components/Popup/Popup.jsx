import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ showPopup, setShowPopup }) => {
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Handle successful login here
  };

  const handleGoogleLoginError = () => {
    console.log('Login Failed');
    // Handle failed login here
  };

  return (
    <>
      {showPopup && (
        <div className='fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 backdrop-blur-sm'>
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
            <div className="flex items-center justify-between">
              <h1 className='text-2xl font-bold text-dark'>Login</h1>
              <IoCloseOutline
                className='text-2xl cursor-pointer'
                onClick={() => setShowPopup(false)}
              />
            </div>
            <div className='mt-4'>
              <input
                type="email"
                placeholder='Enter Email'
                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
              />
              <input
                type="password"
                placeholder='Enter Password'
                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
              />
              <div>
                <button
                  className='w-full bg-primary text-white p-2 rounded-md'
                  onClick={() => setShowPopup(false)}
                >
                  Login
                </button>
              </div>
              <div className="mt-4">
                <p className="text-center">or login with</p>
                <div className='flex justify-center gap-2 mt-2'>
                  {/* <FaFacebook className='text-3xl hover:text-blue-500 duration-200' /> */}
                  <div className='relative'>
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginError}
                      clientId="590408289926-u0svgrehq6fmdntslboj7l91sk6hh1h7.apps.googleusercontent.com" // Add your Google OAuth Client ID here
                      render={({ onClick }) => (
                        <FaGoogle
                          className='text-3xl cursor-pointer hover:text-primary duration-200'
                          onClick={onClick}
                          aria-label="Sign in with Google"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;


