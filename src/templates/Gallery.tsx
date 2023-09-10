// eslint-disable-next-line import/no-extraneous-dependencies
import 'yet-another-react-lightbox/styles.css';

import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const galleryTab = [
    { imageUrl: '/assets/images/g-1.jpeg' },
    { imageUrl: '/assets/images/g-2.jpeg' },
    { imageUrl: '/assets/images/g-3.jpeg' },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div
      id="gallery"
      className="flex h-screen w-full flex-col items-center justify-center bg-[url('/assets/images/bg-gallery.jpeg')] p-6 md:p-12 lg:mr-12"
    >
      <div className="text-menu self-start pb-8 text-5xl leading-none tracking-tight text-white md:text-7xl">
        <div className="py-6 font-thin">
          {/* eslint-disable-next-line no-irregular-whitespace */}
          OUR <span className="font-semibold">GALLERY</span>
        </div>
      </div>
      <div className="flex h-1/2 w-2/3 flex-col gap-4 md:h-1/2 md:w-2/3 md:flex-row">
        {galleryTab.map((x, index) => {
          return (
            <div
              key={index}
              className="relative h-1/3 w-full cursor-pointer md:h-full md:w-1/3"
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${x.imageUrl}")` }}
              ></div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-75"
                onClick={() => {
                  setOpen(true);
                  setImage(x.imageUrl);
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={
          !image
            ? slides
            : [
                ...slides.filter((x) => x.src === image),
                ...slides.filter((x) => x.src !== image),
              ]
        }
      />
    </div>
  );
};

export default Gallery;
