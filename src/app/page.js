import { Search, Share2, Facebook, Twitter, PhoneIcon as WhatsApp, Globe, Instagram } from "lucide-react";

import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="g-gray-100">
        <div className="relative h-48 bg-[#1a1b1e] overflow-hidden">
          <div className="absolute inset-0">
            {/* Background pattern */}
            <div className="grid grid-cols-6 gap-8 opacity-20">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-8 h-8 border border-purple-500 rounded transform rotate-45" />
              ))}
            </div>
          </div>
          <h1 className="relative text-white text-6xl font-cursive text-center pt-12">activities</h1>
        </div>
        <div className="flex max-w-7xl mx-auto -mt-16 flex-col relative lg:flex-row">
          {/* <!-- Sidebar --> */}
          <div className="bg-white mt-[22px] h-[650px] shadow-lg mb-6 rounded-lg w-full lg:w-1/4 p-6">
            <div className="flex flex-col items-center">
              <img alt="The Child Unplugged logo" className="rounded-full mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/-dX2XEKhXEMVjM-6OhpAPOWuC_SOWnpbtNIdubXIkyo.jpg" width="100" />
              <h1 className="text-2xl font-bold">
                The Child Unplugged
              </h1>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-xl">
                  <i className="fas fa-smile">
                  </i>
                </span>
                <span className="ml-2 text-lg font-semibold">
                  4.7
                </span>
                <span className="ml-1 text-gray-500">
                  (664 Ratings)
                </span>
              </div>
              <p className="text-gray-500 mt-2">
                Dubai, United Arab Emirates
              </p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                <i className="fab fa-whatsapp mr-2">
                </i>
                Chat to Shop
              </button>
              <div className="mt-6 w-full">
                <h2 className="text-lg font-semibold">
                  About Us
                </h2>
                <p className="text-gray-500 mt-2">
                  The Child Unplugged was launched in 2018 by a mum of twins and the business later became her third child!...
                </p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4" />
                    Website
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Instagram className="w-4 h-4" />
                    mumzandmunchkinz
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Facebook className="w-4 h-4" />
                    mumzandmunchkinz
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2">Share this eShop</p>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <WhatsApp className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Main Content --> */}
          <div className="flex-1 p-6">

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="flex gap-4 mb-6">
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Play Sessions</button>
                <button className="px-4 py-2 rounded-full bg-black text-white">All Items</button>
              </div>

              <h2 className="text-xl font-semibold mb-4">Product Catalog</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href={"/products/details"}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img alt="Round Play Mat for Baby Gym and..." className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/GywYkjFejWF4qCLZ0KHkVFnOC2TeVZR14LrtsM_Baq8.jpg" width="150" />
                  <h2 className="text-lg font-semibold">
                    Round Play Mat for Baby Gym and...
                  </h2>
                  <p className="text-gray-500">
                    AED 150.00
                  </p>
                </div>
              </Link>
              <Link href={"/products/details"}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img alt="Nordic Grey Play May / Floor..." className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/3QYyDJxfLq7sfjaQMrX3bTbRJcRVDSymIk4xG-uLzjY.jpg" width="150" />
                  <h2 className="text-lg font-semibold">
                    Nordic Grey Play May / Floor...
                  </h2>
                  <p className="text-gray-500">
                    AED 299.00
                  </p>
                </div>
              </Link>
              <Link href={"/products/details"}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img alt="Nordic Floor Cushion with Po..." className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/NdBXRod34Clx0s3NEJWPv_GObsFH3vB6PYv89Byt1qw.jpg" width="150" />
                  <h2 className="text-lg font-semibold">
                    Nordic Floor Cushion with Po...
                  </h2>
                  <p className="text-gray-500">
                    AED 299.00
                  </p>
                </div>
              </Link>
              <Link href={"/products/details"}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img alt="Stuffed Animal Head Wall Mount..." className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/dkvO7yqO4I1_MRKVew9nIqwAIeXv0enpcN4GB9QL4As.jpg" width="150" />
                  <h2 className="text-lg font-semibold">
                    Stuffed Animal Head Wall Mount...
                  </h2>
                  <p className="text-gray-500">
                    AED 220.00
                  </p>
                </div>
              </Link>
              <Link href={"/products/details"}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img alt="Reform pre booking" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/0xBPWV8ruh86Lg8HQ7l2GXN6ighx7FCbVRhgYqnfGpg.jpg" width="150" />
                  <h2 className="text-lg font-semibold">
                    Reform pre booking
                  </h2>
                  <p className="text-gray-500">
                    AED 99.00
                  </p>
                </div>
              </Link>
              <div className="bg-white p-4 rounded-lg shadow">
                <img alt="Plastic Bug - 39pcs" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/xKvpONoJ3qAeLpocAMqP6QHDeMbUxd9cUvWwJG98k2s.jpg" width="150" />
                <h2 className="text-lg font-semibold">
                  Plastic Bug - 39pcs
                </h2>
                <p className="text-gray-500">
                  AED 120.00
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img alt="White Circular Tray" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/75uumAuot_5OI3HIxNbysee_1pcia1EX6E1Vh2j5wws.jpg" width="150" />
                <h2 className="text-lg font-semibold">
                  White Circular Tray
                </h2>
                <p className="text-gray-500">
                  AED 100.00
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img alt="Cotton around Play Mat - White" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/sRAsOEBavtAZ7veMRb183jcH5n_7LNsswklOYUaOaeU.jpg" width="150" />
                <h2 className="text-lg font-semibold">
                  Cotton around Play Mat - White
                </h2>
                <p className="text-gray-500">
                  AED 250.00
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img alt="Rainbow color" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/nXlHtOewInyEjNP9RoWEqRuMIfzFzupInuwvw8LDI2M.jpg" width="150" />
                <h2 className="text-lg font-semibold">
                  Rainbow color
                </h2>
                <p className="text-gray-500">
                  AED 250.00
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img alt="Beautiful" className="rounded-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/niPFx8myg8tDtWbaKaW2jlS8GH4Gd5CkHrCElxu5VOs.jpg" width="150" />
                <h2 className="text-lg font-semibold">
                  Beautiful
                </h2>
                <p className="text-gray-500">
                  AED 250.00
                </p>
              </div>
            </div>

            <h1 className="my-10 text-3xl font-extrabold">Most Populer Products</h1>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2  my-10 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link href={"/products/details"}>
                  <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-600">AED {product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


      <footer>
        <div className="flex flex-col text-slate-500  py-9" bis_skin_checked="1">
          <div className="flex justify-center items-center gap-2" bis_skin_checked="1">
            <p className="text-[12px]">This experience is powered by</p>
            <img className="w-[60px] h-[30px] object-cover rounded-lg" alt="" src="https://storage.googleapis.com/a1aa/image/-dX2XEKhXEMVjM-6OhpAPOWuC_SOWnpbtNIdubXIkyo.jpg" />
          </div>
          <p className="text-[12px] text-center mt-2">The next generation platform for personalized commerce.</p>
        </div>
      </footer>



    </>
  );
}


const products = [
  {
    id: 1,
    name: "Round Play Mat for Baby Gym",
    price: "150.00",
    image: "https://storage.googleapis.com/a1aa/image/GywYkjFejWF4qCLZ0KHkVFnOC2TeVZR14LrtsM_Baq8.jpg",
  },
  {
    id: 2,
    name: "Nordic Grey Play ",
    price: "299.00",
    image: "https://storage.googleapis.com/a1aa/image/GywYkjFejWF4qCLZ0KHkVFnOC2TeVZR14LrtsM_Baq8.jpg",
  },
  // Add more products as needed
]
