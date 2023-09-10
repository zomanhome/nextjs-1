import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

const Contacts = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (): void => {};

  function Error({ message }: { message: string }) {
    return (
      <div className="flex justify-end text-sm text-red-600 md:text-xl">
        <img
          className="mx-1 w-3 md:w-4"
          src="/assets/images/incorrect.svg"
          alt="X"
        />
        {message}
      </div>
    );
  }

  return (
    <div
      id="contacts"
      className="text-menu flex h-screen w-full flex-col items-center justify-center bg-[url('/assets/images/bg-contacts.jpeg')] bg-cover bg-center bg-no-repeat p-6 text-white md:p-12 xl:mr-12"
    >
      <div className="self-start pb-8 text-5xl tracking-tight text-white md:text-7xl">
        <div className="py-6 font-thin">
          CONTACT <span className="font-semibold">US</span>
        </div>
      </div>
      <div className="flex h-full w-full flex-col p-6 md:flex-row md:p-12">
        <div className="flex h-2/5 w-full text-lg md:h-full md:w-1/2 md:flex-row md:text-2xl">
          <div className="flex w-full flex-col justify-between md:w-full md:pb-0">
            <div className="flex">
              <div className="flex w-2/3 flex-col text-end">
                <div>+38 (098) 12 34 567</div>
                <div>+38 (073) 12 34 567</div>
              </div>
              <div className="w-4"></div>
              <div className="self-center text-sm font-thin">
                {/* eslint-disable-next-line no-irregular-whitespace */}
                Phone number
              </div>
            </div>
            <div className="flex text-end">
              <div className="flex w-2/3 flex-col">
                <div>support@carptravel.com</div>
              </div>
              <div className="w-4"></div>
              <div className="self-center text-sm font-thin">Email</div>
            </div>
            <div className="flex flex-row-reverse md:flex-row">
              <div className="flex w-1/3 flex-col text-start md:w-2/3 md:text-end">
                <div>facebook</div>
                <div>instagram</div>
                <div>youtube</div>
                <div>tiktok</div>
              </div>
              <div className="w-4"></div>
              <div className="flex w-2/3 justify-end self-center text-sm font-thin md:w-1/3 md:justify-start">
                Follow us
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-3/5 w-full text-xl md:h-full md:w-1/2 md:flex-row md:text-2xl">
          <div className="w-full text-lg md:w-full md:pb-0 md:text-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-1 rounded-lg font-thin tracking-widest shadow"
            >
              <label htmlFor="name">Full name</label>
              <input
                placeholder="John Smith"
                className="bg-transparent/20 p-1 placeholder-shown:opacity-40 focus-visible:outline-none"
                type="text"
                {...register('name', {
                  required: { value: true, message: 'Name required' },
                  pattern: {
                    value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
                    message: 'Incorrect name',
                  },
                })}
              />
              {errors.name && (
                <Error message={errors.name.message! as string} />
              )}

              <label htmlFor="email">E-mail</label>
              <input
                placeholder="johnsmith@email.com"
                className="bg-transparent/20 p-1 placeholder-shown:opacity-40 focus-visible:outline-none"
                type="email"
                {...register('email', {
                  required: { value: true, message: 'Email required' },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid email',
                  },
                })}
              />
              {errors.email && (
                <Error message={errors.email.message! as string} />
              )}

              <label htmlFor="message">Message</label>
              <textarea
                className="bg-transparent/20 p-1 placeholder-shown:opacity-40 focus-visible:outline-none"
                {...register('message')}
                rows={3}
              />

              <button className="mt-5 self-end rounded p-2 font-semibold">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
