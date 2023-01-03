import Image from "next/image";
import Link from "next/link";
import LogoImageOnForm from "./LogoImageOnForm";

const SignUp = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen px-6 py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center mt-3 mb-3">

          <LogoImageOnForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
