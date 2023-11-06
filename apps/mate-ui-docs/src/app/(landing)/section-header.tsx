'use client';
import { Button, Tag, cn } from '@truenorth/mate-ui';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/routes';
import { CustomButton } from '@components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export interface ImageProps {
  name: string;
  path: string;
  class?: string;
}

const images: ImageProps[] = [
  {
    name: 'Carousel-Typography.png',
    path: '/assets/images/Carousel-Typography.png',
  },
  {
    name: 'Carousel-Palette.png',
    path: '/assets/images/Carousel-Palette.png',
  },
  {
    name: 'Carousel-Documentation.png',
    path: '/assets/images/Carousel-Documentation.png',
  },
  {
    name: 'Carousel-Components.png',
    path: '/assets/images/Carousel-Components.png',
  },
];

const settings = {
  dots: false,
  initialSlide: 0,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1791,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
};

export const HeaderSection = () => {
  const navigation = useRouter();

  return (
    <>
      <header className="flex w-full flex-col items-center rounded-t-lg bg-grey-100 pb-12 pt-24">
        <div className="mb-4 flex flex-col text-center md:w-full">
          <h1 className="mb-4 text-[3rem] font-normal text-grey-900 md:text-[4rem]">
            Meet
            {
              <span className="md:hidden">
                <br />
              </span>
            }
            Mate-UI.
          </h1>
          <h5 className="text-xl font-normal text-grey-700 md:text-2xl">
            A fully customizable design system, built by
            <span className="font-medium text-grey-900"> TrueNorth</span>
          </h5>
        </div>
        <div className="flex rounded-full bg-grey-200 p-[2px]">
          <Tag themeColor="success" size="sm" variant="pill">
            NEW
          </Tag>
          <p className="mx-4 p-0 text-sm font-medium text-grey-600">
            Mate-UI 3.0 is up and running
          </p>
        </div>
      </header>
      <section className="flex w-full justify-center rounded-b-lg bg-grey-100">
        <div className="pb-[10.125rem] ">
          <Button
            themeColor="neutral"
            variant="outlined"
            size="lg"
            className="mr-2"
            onClick={() => navigation.push(Routes.GettingStarted)}
          >
            Get Started
          </Button>
          <CustomButton
            size="lg"
            onClick={() => navigation.push(Routes.Examples)}
          >
            View Examples
          </CustomButton>
        </div>
      </section>

      <picture className="3xl:block mb-36 mt-[-5rem] hidden justify-around">
        <img alt="Carousel picture" src="/assets/images/Carousel.png" />
      </picture>
      <div className="3xl:hidden mt-[-5rem]">
        <Slider
          {...settings}
          className="!h-[300px] w-full sm:max-w-[550px] md:max-w-[680px] 2xl:max-w-[900px]"
        >
          {images.map((image) => {
            return (
              <picture key={image.name} className=" !overflow-hidden !px-2">
                <img
                  src={image.path}
                  alt={image.name}
                  className="max-h-full max-w-full object-cover"
                />
              </picture>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
