 

const PetCard = () => {
    return ( <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
            <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-64 object-cover"/>
            <div className="p-6">
                <small className="text-gray-600 font-semibold">Pet age: </small>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Beautiful Mountain View</h2>
               
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover"/>
                        <span className="text-gray-800 font-semibold">John Doe</span>
                    </div>
                    <span className="text-gray-600 cursor-pointer">Details</span>
                </div>
            </div>
        </div>
 
    );
};

export default PetCard;