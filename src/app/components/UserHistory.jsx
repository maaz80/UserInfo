
const UserHistory = ({ history ,onSelectUser }) => {
    return (
        <div className='h-[30%] w-[47%] bg-white border rounded-lg shadow fixed bottom-3 '>
            <div className='bg-teal-700 absolute top-0 w-[100%] py-1 md:py-2 text-white rounded-b-md poppins-semibold text-lg md:text-xl text-center'>
                History
            </div>
            <div className='p-4 space-y-2 mt-[37px]'>
                {history.length === 0 ? (
                    <p className='text-center text-gray-500 flex justify-center h-28 md:h-40 poppins-regular items-center'>No history to show</p>
                ) : (
                    history.map((user, index) => (
                        <div key={index} className='flex items-center space-x-0 md:space-x-2 border rounded-md py-1 px-0.5 md:px-2 mx-[-10px] md:mx-0' onClick={() => onSelectUser(user)}>
                            <img src={user.avatar.replace('cloudflare-ipfs.com', 'gateway.pinata.cloud')} alt={user.profile.firstName} className="w-8 md:w-16 h-8 md:h-16 rounded-full mr-1 md:mr-4" />
                            <div className='flex flex-col'>
                                <p className="text-[9px] md:text-xl poppins-semibold text-black">{user.profile.firstName} {user.profile.lastName}</p>
                                <p className='text-[6px] md:text-sm poppins-regular'>{user.jobTitle}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserHistory;
