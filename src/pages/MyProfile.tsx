import useGetMyProfile from "../hooks/profile/useGetProfile";

const MyProfile = () => {
  useGetMyProfile();
  return (
    <div className="max-w-6xl mx-auto mt-10 rounded-3xl bg-white text-gray-800 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white px-10 py-12">
        <div>
          <div className="inline-block px-3 py-1 text-xs font-semibold bg-black text-white rounded-full mb-4">
            New Subscriber
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome Back, <span className="text-pink-600">Sienna</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Manage your profile, orders, and preferences with ease.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.pravatar.cc/200?img=47"
            alt="Sienna Hewitt"
            className="h-48 w-48 rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-10 py-12 bg-gray-50">
        {/* Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <p className="text-sm text-gray-500">First seen</p>
            <p className="font-semibold text-lg">1 Mar, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">First purchase</p>
            <p className="font-semibold text-lg">4 Mar, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="font-semibold text-lg">$118.00</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">MRR</p>
            <p className="font-semibold text-lg">$0.00</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                type="text"
                value="Sienna"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                value="Hewitt"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              value="siennahewitt@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500"
              onChange={(e) => console.log(e.target.value)}
            />
            <p className="text-xs text-green-600 mt-1">
              ✔ Verified on 2 Jan, 2025
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500">
              <option>🇺🇸 United States</option>
              <option>🇮🇳 India</option>
              <option>🇬🇧 United Kingdom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              <span className="px-4 py-3 bg-gray-100 text-gray-500 text-sm whitespace-nowrap">
                untitledui.com/
              </span>
              <input
                type="text"
                value="siennahewitt"
                className="flex-1 px-4 py-3 focus:ring-2 focus:ring-pink-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
            <div className="flex space-x-2">
              <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                Archive
              </button>
              <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                View orders
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="px-5 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400">
                Cancel
              </button>
              <button className="px-5 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
