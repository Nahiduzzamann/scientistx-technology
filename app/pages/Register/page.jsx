
import React from 'react';
import styles from './Register.module.css';

import Image from "next/image";

import Img from '../../../public/scientistx 1.png';
import Link from 'next/link';

const Register = () => {
  return (
    <div className={`flex justify-center items-center h-screen text-white pt-[100px] ${styles.registerContainer}`}>
      <div className={`w-1/2 ${styles.registerBox}`}>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image class="mx-auto h-20 w-auto border-2 border-blue-600 rounded" src={Img} alt="Your Company" />
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">Register</h2>
              <p className='text-blue-600'>ScientistX account is for salary, revenue and <br/> share market of ScientistX Group  </p>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-blue-600">Employee Id</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-blue-600">Password</label>
                  
                </div>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <a href="/" class="font-semibold text-blue-600 hover:text-red-500">Go back</a>
                </div>
              </div>

              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
              </div>
            </form>

            
          </div>
        </div>
      </div>

      <div className={`w-1/2 ${styles.registerBox}`}>
        <p className="Register-text-center">Right Box</p>
        <Link href='/pages/LogIn'>
        <p>LonIn</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;