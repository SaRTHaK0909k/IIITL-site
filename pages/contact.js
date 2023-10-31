import Layout from "../components/Layout";  
import React from 'react';

const Contact = () => {
    return (
        <div>
            <Layout>
            <div className="bg-gray-100 py-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Contact Us</h1>
                </div>
                <div className="p-4 sm:p-5">
                    <div className="border-2 border-blue-500 rounded text-black m-4 sm:m-8 relative">
                        <div className="flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/2 md:border-r-2 md:border-b-0  border-b-2 border-blue-500">
                                <div className="m-4 ">
                                    <table className="table-auto border-2 w-full mx-auto my-4 sm:my-8 border-gray-300">
                                        <thead>
                                            <tr>
                                                <th className="border-2 px-4 py-2">Address:</th>
                                                <td className="border-2 px-4 py-2">IIIT Lucknow <br /> Chak Ganjaria, C. G. City <br /> Lucknow - 226002</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="border-2 px-4 py-2">Fax: </th>
                                                <td className="border-2 px-4 py-2">Row 1, Column 2</td>
                                            </tr>
                                            <tr>
                                                <th className="border-2 px-4 py-2">Working Hours: </th>
                                                <td className="border-2 px-4 py-2">9.00 AM to 5.30 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.22797035126!2d81.02144971071534!3d26.80086887661701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1697909167466!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: '0', transition: 'transform 0.5s' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="hover:border border-bluedark hover:shadow-lg hover:scale-105 p-3 my-4 sm:my-5"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full overflow-x-auto border-t-2 border-t-blue-500">
                            <table className="table-auto border-2 border-gray-300 w-full mx-auto my-7">
                                <thead>
                                    <tr>
                                        <th className="border-2 px-4 py-2">Purpose</th>
                                        <th className="border-2 px-4 py-2">Contact Person</th>
                                        <th className="border-2 px-4 py-2">Contact Number</th>
                                        <th className="border-2 px-4 py-2">Email Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-2 px-4 py-2">Director's Office</td>
                                        <td className="border-2 px-4 py-2">PA to Director</td>
                                        <td className="border-2 px-4 py-2">+91 8389134686</td>
                                        <td className="border-2 px-4 py-2">director@iiitl.ac.in</td>
                                    </tr>
                                    {/* Additional rows here */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    );
};

export default Contact;
