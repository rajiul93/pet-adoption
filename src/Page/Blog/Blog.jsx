import HowAdopt from "./HowAdopt";

const Blog = () => {
    return (
    
    <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-8/12 px-4 mb-8">
                <img src="https://stittsvillesmallanimalclinic.ca/files/2012/07/pets-banner.jpg" alt="Featured Image" className="w-full h-64 object-cover rounded" />
                <h2 className="text-4xl font-bold mt-4 mb-2">Why Adopt a Pet?</h2>
                <p className="text-gray-700 mb-4">Adopting a pet is a life-changing experience, not just for the animal but for you as well. When you choose to adopt, you’re giving a homeless pet a second chance at a happy life. Here are some compelling reasons why adoption is the best option</p>
               <h2>Save a Life:</h2>
                <p className="text-gray-700 mb-4">Pets provide unconditional love and companionship, which can significantly improve your mental and physical health. Studies show that pet owners have lower blood pressure, reduced stress, and increased levels of physical activity.</p>
           
               <h2>Health Benefits:</h2>
                <p className="text-gray-700 mb-4"> Every year, millions of animals are euthanized due to overpopulation in shelters. By adopting, you’re saving a life and making room for another animal in need.</p>
           
               <h2>Support Ethical Practices:</h2>
                <p className="text-gray-700 mb-4"> Adopting from a shelter or rescue organization helps combat the cruel practices of puppy mills and pet stores that often prioritize profit over animal welfare.</p>
           
               <h2>Find the Perfect Match: </h2>
                <p className="text-gray-700 mb-4">  Shelters have pets of all breeds, ages, and sizes. Whether you’re looking for a playful puppy, a mellow senior cat, or a small animal companion, there’s a perfect match waiting for you.</p>
           
            </div>
            <div className="w-full md:w-4/12 px-4 mb-8">
                <div className="bg-gray-100 px-4 py-6 rounded">
                    <h3 className="text-lg font-bold mb-2">How to Adopt</h3>
                   <HowAdopt />
                   <div>
                    <h2>Contact Us</h2>
                    <br />
                    <p>Ready to make a difference? Visit our shelter, check out our adoptable pets online, or contact us for more information on how you can help.</p>
                   
                   <br />
                   <p>Together, we can give these animals the love and care they deserve. Adopt, don’t shop!</p>
                   </div>
                </div>
            </div>
        </div>
    </main>
 
    );
};

export default Blog;