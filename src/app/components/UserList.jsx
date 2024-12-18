import React from 'react';

const UserList = ({ users, onSelectUser }) => (
  <div className="space-y-4">
    <div className='bg-teal-700  top-0  py-1 md:py-2 text-white rounded-b-md poppins-semibold text-lg md:text-xl text-center'>Users List</div>

    {users.length === 0 ? (
      <p className="text-center text-gray-500">No data to show</p>
    ) : (
      users.map((user, index) => (
        <div
          key={index}
          className="flex items-center p-1 md:p-2 cursor-pointer hover:bg-gray-100 rounded-lg border border-gray-300 list bg-white"
          onClick={() => onSelectUser(user)}
        >
          <img
            src={user.avatar.replace('cloudflare-ipfs.com', 'gateway.pinata.cloud')}
            alt={user.profile.firstName}
            className="w-10 md:w-28 h-10 md:h-28 rounded-full mr-1 md:mr-4"
          />
          <div className='flex flex-col'>
            <p className="text-[10px] md:text-2xl poppins-semibold text-black">{user.profile.firstName} {user.profile.lastName}</p>
            <p className='text-[7px] md:text-xl poppins-regular'>{user.jobTitle}</p>
            <p className='text-[6px] md:text-base poppins-regular'>{user.profile.email}</p>
          </div>
        </div>
      ))
    )}
  </div>
);

export default UserList;
