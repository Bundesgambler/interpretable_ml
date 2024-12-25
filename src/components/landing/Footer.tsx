export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p className="mb-4">© {new Date().getFullYear()} Interpretable ML. All rights reserved.</p>
          <nav aria-label="Footer Navigation">
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};