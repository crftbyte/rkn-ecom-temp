import React from 'react'

export default function Page(props) {


    return (
        <>
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img alt="Logo" className="h-10 w-10 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/Xws4NCad2aqx0qjI6MblRuHeipqqmpT9YPz5Oaf9Dj4.jpg" width="50" />
                    <h1 className="ml-2 text-xl font-bold">
                        The Child Unplugged
                    </h1>
                </div>
                <div className="flex items-center">
                    <span className="text-yellow-400">
                        <i className="fas fa-star">
                        </i>
                        4.7 (664 Ratings)
                    </span>
                    <span className="ml-4">
                        Dubai, United Arab Emirates
                    </span>
                </div>
                <div className="flex items-center">
                    <a className="mr-4" href="#">
                        العربية
                    </a>
                    <a className="text-white" href="#">
                        <i className="fas fa-shopping-cart">
                        </i>
                        Your cart
                    </a>
                </div>
            </header>
            <main className="max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between p-4 bg-white shadow-t-md rounded-lg">
                    <div className="flex items-center">
                        <img alt="The Child Unplugged logo" className="w-16 h-16 rounded-lg" height="60" src="https://storage.googleapis.com/a1aa/image/L-H0ZJJkxI6YY7lpdQ_jZVwS2RsUJWsgwSqhT5vst4o.jpg" width="60" />
                        <div className="ml-4">
                            <h1 className="text-xl font-bold text-gray-900">
                                The Child Unplugged
                            </h1>
                            <div className="flex items-center text-gray-500">
                                <i className="fas fa-smile text-yellow-500">
                                </i>
                                <span className="ml-1 text-sm">
                                    4.7 (664 Ratings)
                                </span>
                                <span className="mx-2">
                                    •
                                </span>
                                <span className="text-sm">
                                    Dubai, United Arab Emirates
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button disabled="" className="flex gap-x-5 disabled:cursor-not-allowed">
                            <div className="relative mt-1" >
                                <div className="text-[#000] text-zbni-primary" >
                                    <svg width="25" height="22" viewBox="0 0 25 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="rtl:scale-x-[-1]"><path d="M8.9248 16.3457H21.4609C21.8799 16.3457 22.2451 16.002 22.2451 15.54C22.2451 15.0781 21.8799 14.7344 21.4609 14.7344H9.10742C8.49512 14.7344 8.11914 14.3047 8.02246 13.6494L7.85059 12.5215H21.4824C23.0508 12.5215 23.8564 11.5547 24.082 10.0186L24.9414 4.33594C24.9629 4.19629 24.9844 4.02441 24.9844 3.92773C24.9844 3.41211 24.5977 3.05762 24.0068 3.05762H6.46484L6.26074 1.69336C6.15332 0.866211 5.85254 0.447266 4.75684 0.447266H0.986328C0.556641 0.447266 0.191406 0.823242 0.191406 1.25293C0.191406 1.69336 0.556641 2.06934 0.986328 2.06934H4.61719L6.33594 13.8643C6.56152 15.3896 7.36719 16.3457 8.9248 16.3457ZM23.1582 4.67969L22.3955 9.8252C22.3096 10.4912 21.9551 10.8994 21.3213 10.8994L7.61426 10.9102L6.70117 4.67969H23.1582ZM9.77344 21.5664C10.7402 21.5664 11.5137 20.8037 11.5137 19.8262C11.5137 18.8594 10.7402 18.0859 9.77344 18.0859C8.7959 18.0859 8.02246 18.8594 8.02246 19.8262C8.02246 20.8037 8.7959 21.5664 9.77344 21.5664ZM19.8174 21.5664C20.7949 21.5664 21.5684 20.8037 21.5684 19.8262C21.5684 18.8594 20.7949 18.0859 19.8174 18.0859C18.8506 18.0859 18.0664 18.8594 18.0664 19.8262C18.0664 20.8037 18.8506 21.5664 19.8174 21.5664Z"></path></svg>
                                </div>
                                <div className="absolute !font-extralight ltr:-right-3 rtl:-left-3 left-2 flex h-[17px] items-center rounded-3xl text-2xs px-[5px] py-[10px] bg-zbni-primary text-white -top-[18px] bg-[#000]" >0</div>
                            </div>
                            <div className="text-sm-2 font-bold block text-zbni-primary text-[#000]" >Your cart</div>
                        </button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg border flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img alt="Baby on round play mat" className="rounded-lg" height="600" src="https://storage.googleapis.com/a1aa/image/shhUrXjDnNmJak_kXV8Sy-6D2WRNGTPRKbQirOigYKs.jpg" width="600" />
                    </div>
                    <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                        <h2 className="text-2xl font-bold mb-2">
                            Round Play Mat for
                        </h2>
                        <p className="text-xl text-gray-700 mb-4">
                            AED 150.00
                            <span className="text-sm text-gray-500">
                                Including VAT
                            </span>
                        </p>
                        <div className="p-4 bg-white rounded-lg">
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-medium">Qty</span>
                                <div className="flex items-center border rounded-full px-3 py-1 space-x-2">
                                    <button className="text-lg">−</button>
                                    <span className="text-lg">1</span>
                                    <button className="text-lg">+</button>
                                </div>
                                <button className="px-4 py-2 border rounded-full text-lg font-medium">Add to cart</button>
                            </div>
                            <div className="mt-4">
                                <button className="w-[50%] flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-full text-lg font-medium">
                                    <i className="fab fa-whatsapp mr-2"></i> Chat to Shop
                                </button>
                            </div>
                        </div>

                        <div>

                            <p className="mt-4 text-gray-700">
                                Beautiful for flat-lay announcement pics, newborn and monthly milestone photos and this round baby mat is a stylish statement piece in the nursery.
                            </p>
                            <h3 className="mt-4 font-bold">
                                Benefits:
                            </h3>
                            <h3 className="mt-2 font-bold">
                                Material:
                            </h3>
                            <p className="text-gray-700">
                                • Soft cotton with polyester filling
                            </p>
                            <h3 className="mt-2 font-bold">
                                Dimensions:
                            </h3>
                            <p className="text-gray-700">
                                • 86cm (L) x 86cm (W) x 1cm (H)
                            </p>
                            <p className="text-gray-700">
                                • They are perfectly padded for squishy little bums
                            </p>
                            <div className="mt-4 flex items-center">
                                <span className="mr-2">
                                    Share this item
                                </span>
                                <a className="text-gray-600" href="#">
                                    <i className="fab fa-facebook">
                                    </i>
                                </a>
                                <a className="ml-2 text-gray-600" href="#">
                                    <i className="fab fa-twitter">
                                    </i>
                                </a>
                                <a className="ml-2 text-gray-600" href="#">
                                    <i className="fab fa-whatsapp">
                                    </i>
                                </a>
                            </div>
                            <p className="mt-4 text-gray-700">
                                Beautiful for flat-lay announcement pics, newborn and monthly milestone photos and this round baby mat is a stylish statement piece in the nursery.
                            </p>
                            <h3 className="mt-4 font-bold">
                                Benefits:
                            </h3>
                            <h3 className="mt-2 font-bold">
                                Material:
                            </h3>
                            <p className="text-gray-700">
                                • Soft cotton with polyester filling
                            </p>
                            <h3 className="mt-2 font-bold">
                                Dimensions:
                            </h3>
                            <p className="text-gray-700">
                                • 86cm (L) x 86cm (W) x 1cm (H)
                            </p>
                            <p className="text-gray-700">
                                • They are perfectly padded for squishy little bums
                            </p>
                            <div className="mt-4 flex items-center">
                                <span className="mr-2">
                                    Share this item
                                </span>
                                <a className="text-gray-600" href="#">
                                    <i className="fab fa-facebook">
                                    </i>
                                </a>
                                <a className="ml-2 text-gray-600" href="#">
                                    <i className="fab fa-twitter">
                                    </i>
                                </a>
                                <a className="ml-2 text-gray-600" href="#">
                                    <i className="fab fa-whatsapp">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto p-4">

                    <h2 className="text-2xl font-semibold mb-4">
                        View other items
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        <div className="text-center">
                            <img alt="Baby on a Nordic Grey Play Mat/Floor Cushion with white pom poms" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/fKu_TIZ1CbYfhSZuohKmGYWrMP_KiMc5zPYI0e5lvD0.jpg" width="200" />
                            <p className="text-sm">
                                Nordic Grey Play May / Floor Cushion with...
                            </p>
                            <p className="text-sm font-semibold">
                                AED 299.00
                            </p>
                        </div>
                        <div className="text-center">
                            <img alt="Baby on a Nordic Floor Cushion with Pom Poms" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/OGk4k-Iuqwdtd0a3fVKM1FyzTkul0ZkxkRpgyRr9gHg.jpg" width="200" />
                            <p className="text-sm">
                                Nordic Floor Cushion with Pom Poms -...
                            </p>
                            <p className="text-sm font-semibold">
                                AED 299.00
                            </p>
                        </div>
                        <div className="text-center">
                            <img alt="Stuffed Animal Head Wall Mount - Rabbit" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/6pf_o4G8RFLLDibry7IxUi_pOiqy1ewfUdICQG0-Lm8.jpg" width="200" />
                            <p className="text-sm">
                                Stuffed Animal Head Wall Mount - Rabbit
                            </p>
                            <p className="text-sm font-semibold">
                                AED 220.00
                            </p>
                        </div>
                        <div className="text-center">
                            <img alt="Reform pre booking event with children playing" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/T9lFAAXiRgZ3Ml5X_3xk9xtRX9_fpd-RvaoqccFUKL4.jpg" width="200" />
                            <p className="text-sm">
                                Reform pre booking
                            </p>
                            <p className="text-sm font-semibold">
                                AED 99.00
                            </p>
                        </div>
                        <div className="text-center">
                            <img alt="Plastic Bug - 39pcs set with various plastic bugs" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/-ILg976mhNx-5dLBnHgpObWd7YZgvDyu3HjtY5Ztv3o.jpg" width="200" />
                            <p className="text-sm">
                                Plastic Bug - 39pcs
                            </p>
                            <p className="text-sm font-semibold">
                                AED 120.00
                            </p>
                        </div>
                        <div className="text-center">
                            <img alt="White Circular Tray with children playing with animal toys" className="rounded-lg mb-2" height="200" src="https://storage.googleapis.com/a1aa/image/mCyoBWwi5kVVPET_L8Apt0aj2Gk2o2sCXXt-7z9xi_k.jpg" width="200" />
                            <p className="text-sm">
                                White Circular Tray
                            </p>
                            <p className="text-sm font-semibold">
                                AED 100.00
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
