import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authentication";

const AddService = () => {
  // const { user } = useContext(AuthContext);
  const navigete = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.service.value;
    const logo = form.logo.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;

    //   console.log(logo,serviceName,image,price,description);
    console.log(serviceName);

    const service = {
      //   serviceId: _id,
      service: serviceName,
      logoURL: logo,
      discription: description,
      price,
      imgURL: image,
    };

    fetch(`http://localhost:5000/addServices`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        form.reset();
        navigete("/services");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleAddService}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Service Name
              </label>
              <input
                type="text"
                name="service"
                placeholder="Service Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Logo URL
              </label>
              <input
                type="text"
                name="logo"
                id="logo"
                placeholder="Logo URL"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image URL"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                id="message"
                placeholder="Description"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
