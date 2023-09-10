import className from 'classnames';
import Link from 'next/link';
import React from 'react';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    relative: true,
    'h-12': true,
    'mt-6': true,
    'cursor-pointer': true,
    'tracking-widest': true,
  });

  return (
    <div className={btnClass}>
      <Link href="#contacts">
        <img
          className="absolute left-0 top-0 h-12"
          src={`/assets/images/1.svg`}
          alt=""
        />
        {props.children}
        <img
          className="absolute right-0 top-0 h-12"
          src={`/assets/images/2.svg`}
          alt=""
        />
      </Link>

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply mt-36 md:mt-6 text-lg font-semibold py-2 px-4 bg-transparent/20 w-full;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white;
          }

          .btn-primary:hover {
            @apply bg-transparent/40;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
