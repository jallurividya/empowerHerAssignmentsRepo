function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-xl font-bold">Tailwind UI</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>
      <section className="p-8 text-center">
        <h2 className="
          text-xl 
          md:text-3xl 
          lg:text-5xl 
          font-bold
          bg-gradient-to-r 
          from-blue-500 
          to-purple-600
          bg-clip-text 
          text-transparent
        ">
          Tailwind CSS Exploration
        </h2>
        <div className="mt-6 flex justify-center">
          <img
            src="https://picsum.photos/400/250"
            alt="Hero"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <button className="
          mt-6 
          px-6 
          py-2 
          rounded 
          bg-gray-200
          hover:bg-gray-300
          active:bg-gray-400
          transition
        ">
          Explore More
        </button>
      </section>
      <section className="p-8">
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Tailwind</li>
          <li className="hover:text-blue-600">HTML/CSS</li>
          <li className="hover:text-blue-600">Javascript</li>
        </ul>
      </section>
      <section className="
        p-8 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      ">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow p-4">
            <img
              src="https://picsum.photos/300/200"
              alt="Card"
              className="rounded mb-3"
            />
            <h3 className="font-bold text-lg">Feature {item}</h3>
            <p className="text-gray-600">Clean and responsive UI.</p>
            <button className="
              mt-3 
              px-4 
              py-1 
              bg-gray-200 
              rounded
              hover:bg-gray-300 
              active:bg-gray-400
            ">
              Read More
            </button>
          </div>
        ))}
      </section>
      <section className="p-8 overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border p-2">Harsha</td>
              <td className="border p-2">Developer</td>
              <td className="border p-2">Active</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border p-2">Tharun</td>
              <td className="border p-2">Designer</td>
              <td className="border p-2">Active</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border p-2">Sharan</td>
              <td className="border p-2">Tester</td>
              <td className="border p-2">Inactive</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="p-8 max-w-md mx-auto bg-white shadow rounded mb-10">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="
            w-full 
            py-2 
            bg-gray-200 
            rounded 
            hover:bg-gray-300 
            active:bg-gray-400
          ">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
