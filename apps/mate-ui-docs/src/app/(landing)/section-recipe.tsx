'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { cn } from '@chaco/mate-ui';

interface IngredientProps {
  title: string;
  image: string;
}

interface ComponentIngredientProps {
  ingredient: IngredientProps;
  className?: string;
  key?: string;
}

export const Ingredients: IngredientProps[] = [
  {
    title: 'Best practices baked in',
    image: '/assets/images/ingredient-best-practices.png',
  },
  {
    title: 'Updated frequently',
    image: '/assets/images/ingredient-updated.png',
  },
  {
    title: 'Robust tech stack',
    image: '/assets/images/ingredient-stack.png',
  },
  {
    title: 'Beautiful by default',
    image: '/assets/images/ingredient-beautiful.png',
  },
];

const Ingredient: React.FC<ComponentIngredientProps> = ({
  ingredient,
  className,
}) => {
  return (
    <div className={cn(className, 'mb-12 flex sm:w-1/2 flex-col items-center')}>
      <picture>
        <img alt={ingredient.title} src={ingredient.image} />
      </picture>
      <p className="mt-4 text-center">{ingredient.title}</p>
    </div>
  );
};

const settings = {
  dots: true,
  responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const RecipeSection = () => {
  return (
    <section className="mt-[11.25rem] flex w-full flex-col items-center justify-center text-center">
      <h1 className="mb-12 text-3xl font-normal text-grey-900 md:text-[2.25rem]">
        Our Recipe
      </h1>
      <div className="3xl:w-full 3xl:justify-between 3xl:px-[88px] 3xl:whitespace-nowrap hidden flex-col sm:flex sm:flex-row sm:flex-wrap">
        {Ingredients.map((ingredient) => {
          return (
            <Ingredient
              key={ingredient.title}
              ingredient={ingredient}
              className="3xl:w-auto"
            />
          );
        })}
      </div>
      <Slider {...settings} className="max-w-[300px] sm:!hidden">
        {Ingredients.map((ingredient, index) => {
          return (
            <Ingredient
              key={`${ingredient.title}-${index}`}
              ingredient={ingredient}
            />
          );
        })}
      </Slider>
    </section>
  );
};
