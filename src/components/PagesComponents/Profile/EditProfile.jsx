

function EditProfile() {

  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
      <p className="text-primary text-center font-bold text-xl mb-5">
        Edit Your Profile
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            // value={formData.firstName}
            // onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            // value={formData.lastName}
            // onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter last name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Email"
            required
          />
        </div>
        {/* <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Contact No
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Contact Number"
            required
          />
        </div> */}

        <div className="text-center my-5">
          <button
            type="submit"
            className="font-bold bg-primary text-white p-2 px-10 py-2 rounded-md shadow-lg"
          > Save & Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
