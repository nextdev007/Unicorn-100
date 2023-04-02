"use client";

import Caresouls from "@/components/Caresouls";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "Project"), orderBy("Timestamp", "desc")),
        (snapshot) => {
          setProjects(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <>
      {/* Caresoul */}

      <div>
        <Caresouls />
      </div>

      <div className="px-2 md:flex space-y-4 bg-gray-200">
        {/* Left Div */}
        <div className="space-y-3 md:w-1/2 md:pt-20 px-16">
          <h3 className="text-2xl text-[#800000]">Hello!</h3>
          <h1 className="text-4xl font-bold text-[#800000]">
            GOOD MORNING, ROHIT PATEL
          </h1>
          <p className="text-lg font-serif text-[#133337] ">
            Debugging is twice as hard as writing the code in the first
            place.Therfore, if you write the code as cleverly as possible, you
            are, by definition, not smart enough to debug it.
          </p>
          <div className="flex w-full items-center  md:pt-20 font-bold text-white transition-shadow justify-center gap-24">
            <button className="px-4 py-2 bg-[#8f96fd] rounded-md ">Add</button>
            <button className="px-4 py-2 bg-[#e88d8d] rounded-md ">
              Delete
            </button>
          </div>
        </div>

        {/* Right Div */}

        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-[600px]"
          />
        </div>
      </div>

      {/* Middle section */}

      <div className="bg-gray-200">
        <h3 className="text-center pt-4 font-medium text-xl">
          Project Made By Rohit : Technology Used- Next Js and Tailwind CSS
        </h3>

        <div className="grid lg:max-w-4xl xl:max-w-7xl mx-auto md:max-w-2xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8">
          {projects.map((item) => (
            <Project
              img={item.data().Image}
              projectTitle={item.data().title}
              projectDescription={item.data().description}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* Social Media connect */}

      <div>
        <h2 className="text-center text-2xl font-medium py-4">
          Lets Meet on Social Media
        </h2>

        <div className="flex items-center gap-x-10 justify-center shadow-2xl p-8 bg-white shadow-gray-950 max-w-7xl mx-auto  ">
          {/* Facebook */}
          <div>
            <Link href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtzgbwg-BoJxoEdAXltWwcSmmtnce59CMUQ&usqp=CAU"
                alt=""
                className="socialMediaIcon"
              />
            </Link>
          </div>
          {/* Instagram */}
          <div>
            <Link href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfl11P5r2xwa4a62dCVvW0NG1-vlrZYzTWA&usqp=CAU"
                alt=""
                className="socialMediaIcon"
              />
            </Link>
          </div>
          {/* GitHub */}
          <div>
            <Link href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAbFBMVEX///8XFRUAAAAUEhL39/cPDAwSDw+1tbX8/PylpaW4uLjj4+Px8fEFAADGxsZnZ2c5ODgvLi7a2tpWVlaamZnp6emtrKzAwMBFRUXT09OUlJSBgIBfXl4gHx9BQEA0MzMnJiZ0dHROTU2Li4tom648AAADoklEQVRoge1YybKjMAwMMjZLIEBYEkJW8v//OMZsNmAj8t7UHCZ9SlWkLllIbcm73RdffPHFP4N9PF1eUcoRvS7+0f495r1X34AjpBxh8+tWe/vfYA68GIASSwGhAImX/5S6CoFai2AA1U/o7QqALFOL+Dl98Cm3Y4GeuQWw4rOwr8DWuJvo0w+CL9fD7oKn5VZuBxN2CwYbU5Mhw+6Cz/4eN2e/4Lm9jdxbYj9t5ubsJxz3vm8c3iShoYe4ARca1tseUeRJ1+/kVmQR6Lrfsri+RJci6dhpguF+90kRX8n17wM9IYyR/igMYsfdSd8HqnXuckg4dM1xeECjUhzW82mJH9SC5NQncWpvQDykAYYrIYPHuyjzwOYI8rJ4x3Bxu//cQdrWE+MMgbDEXTMWOI/RrHXqGDi9o7h3KcWG448ljiWvx3ICx2h5Hy0Jw6UlGRWOxibDvdybgLrEAsXF1ElvxRKlpL7iYqr1hyTi9ImaTtx7OPowQzUe0UeUkMt3uMFJllpMN7eQcwme1iySTgjoe9eWQg8jrZmU8vCK5d7tXmPo+qTb8vk2XLpywYCuCuQqx37OmZ9uQD2MRgTXQS0Ca0w6HDRGhUR+2zBHuZICaNPp/Qa5rhZlcmsDub2V/OOcI8g/rxYduSMb6b76AkrZT3dfHGSjD6c/bVC5ZERTPLkiSbpvZSuKi941XUVztW7SDWoSzwnkT2W41SV5M14qKmI5pBcqBvTIXShO+uFCufyRQ/Fe2VS1osjxkOdlxhASENxkF/owmKq7ELVWYz8q3OZUdpXerxR0Le/ZZDUwK1La9ANJMu8K4heQQpuboCCTl4HQ3HlCAWhzOecptIeg12IhO2VxpbNHhzVBEtM2RE24XdUT8XyjLGsn8bQz28Xo2czdiReETUmNDQuTQSNaXCbXlVRknRdKIJfwtHz3S+QrGW/9BCM0o1PRsc/PW88XSGJqoB5drYvdzG9ezXjOZ4rxnoeOk4taOLZTX5Bd67Sa59KZkUON4ea7Als9pT8lZ9jB9ShSTWPDTjQlx67+u/7ZAs76YKbk2EeLBo6IPYRqL6K3Z3eXSk5WdsRZ7EQ4wTONrvXc11eVf0PcDQ7QXumMhiEFf/q3XC3hlhmnRR6P/kZyiD95dK0GsZ6nZSCn+MVMRRl37a8lJxBvfrEcULRvWBpyBlufKyfwnly4l8i5zD/Rc5MWhwjOszq3zxBtrpFFLMoA7r3kiy+++E/xB7JZJUQkJJhjAAAAAElFTkSuQmCC"
                alt=""
                className="socialMediaIcon"
              />
            </Link>
          </div>
          {/* Twitter */}
          <div>
            <Link href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vuDKsXOMlXydzi30nFTbsorl1kY8yfehVQ&usqp=CAU"
                alt=""
                className="socialMediaIcon"
              />
            </Link>
          </div>

          {/* YouTube  */}
          <div>
            <Link href="#">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="socialMediaIcon"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Page */}

      <Footer />
    </>
  );
}
