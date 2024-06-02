
const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 dark:bg-gray-100 dark:text-gray-600 max-w-6xl mx-auto">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-600">
				<img src="https://cdn.pixabay.com/photo/2017/03/23/09/33/adopt-2167830_960_720.png" alt="" />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#" data-abc="true">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" data-abc="true">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#" data-abc="true">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" data-abc="true">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" data-abc="true">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;