const CategoryBanner = ({ category }) => {
  return (
    <header className="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Welcome to <span className="text-pink-300">My</span>
          <span className="text-purple-300">Awesome</span>
          <span className="text-blue-300"> {category}</span>
        </h1>
      </div>
    </header>
  );
};

export default CategoryBanner;
