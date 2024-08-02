"use client";
import React, { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import Modal from '@/components/modal';
import Toast from '@/alert/alert';

const Home: React.FC = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleModalSubmit = () => {
    setIsToastVisible(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Breadcrumb variant={"large"} datas={[
          { title: 'Home', path: 'home' },
          { title: 'Library', path: 'library' },
          { title: 'Data', path: 'data' },
        ]} />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" Sekawan Limo"}
          </a>
        </div>
      </div>
      <div className="justify-center">
        <Modal
          variant="Terang"
          title="Example Modal"
          accept="Accept"
          reject="Reject"
          description="This is an example description for the modal."
          onClick={handleModalSubmit}
        >
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
              </div>

              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  </div>

                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>

              <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleModalSubmit}>
                Submit
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
            </form>
          </div>
        </Modal>
        <div className={`toast fixed items-center justify-center ${isToastVisible ? 'block' : 'hidden'}`}>
          <Toast type={"notification"}
            variant={"success"}
            title={"Notification"}
            message={"Notifikasi berhasil dikirim!"} size={'large'} />
        </div>
      </div>
    </main>
  );
};

export default Home;