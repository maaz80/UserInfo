import React, { useEffect, useState } from 'react';

const UserDetails = ({ user }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (user) {
      setAnimated(true);

      // Reset animation after 1.5 seconds
      const timeout = setTimeout(() => {
        setAnimated(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [user]);

  return (
    <div className={`p-4  border rounded-lg shadow fixed w-[47%] h-[65%] flex flex-col justify-center items-center bg-white `}>
      {user ? (
        <>
        <div className='bg-teal-700 absolute top-0 w-[100%] py-1 md:py-2 text-white rounded-b-md poppins-semibold text-md md:text-xl text-center'>{user.profile.firstName} {user.profile.lastName}</div>
          <img src={user.avatar.replace('cloudflare-ipfs.com', 'gateway.pinata.cloud')} alt={user.profile.firstName} className="w-24 md:w-48 h-24 md:h-48 rounded-full mx-auto mb-4 drop-shadow-lg " />
          <h2 className="text-sm md:text-xl font-semibold text-center poppins-bold"><span className={`relative  ${animated ? 'name' : ''}`}>{user.profile.firstName} {user.profile.lastName}</span></h2>
          <p className='text-center text-gray-600'><span className='poppins-semibold text-black text-[11px] md:text-base'>Username: </span><span className={`relative text-[9px] md:text-base poppins-regular ${animated ? 'name' : ''}`}>{user.profile.username}</span></p>
          <p className="text-center text-gray-600"><span className='poppins-semibold text-black text-[11px] md:text-base'>Email:</span> <span className={`relative text-[9px] md:text-base poppins-regular ${animated ? 'name' : ''}`}>{user.profile.email}</span></p>
          <p className="text-center text-gray-600"><span className='poppins-semibold text-black text-[11px] md:text-base'>Bio:</span> <span className={`relative text-[9px] md:text-base poppins-regular ${animated ? 'name' : ''}`}>{user.Bio}</span></p>
          <p className='text-center text-gray-600'><span className='poppins-semibold text-black text-[11px] md:text-base'>Job: </span><span className={`relative text-[9px] md:text-base poppins-regular ${animated ? 'name' : ''}`}>{user.jobTitle}</span></p>
        </>
      ) : (
        <p className="text-center text-gray-500 poppins-regular">Select a user to see details</p>
      )}
    </div>
  );
};

export default UserDetails;
