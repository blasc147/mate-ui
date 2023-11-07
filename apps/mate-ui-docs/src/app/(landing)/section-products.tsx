import React from 'react';
import { cn } from '@chaco/mate-ui';

interface ProductProps {
  title: string;
  image: string;
  description: string;
}

interface ComponentProductProps {
  product: ProductProps;
  className: string;
  key?: string;
}

const Products: ProductProps[] = [
  {
    title: 'Design',
    description:
      'Leverage a robust toolkit to create and communicate efficiently.',
    image: '/assets/images/design-thumb.png',
  },
  {
    title: 'Develop',
    description:
      'Jump-start your build and benefit from a shared design language.',
    image: '/assets/images/develop-thumb.png',
  },
  {
    title: 'Test',
    description: 'Stress-tested components means fewer surprises.',
    image: '/assets/images/test-thumb.png',
  },
  {
    title: 'Deliver',
    description: 'More consistent results - faster.',
    image: '/assets/images/deliver-thumb.png',
  },
];

const Product: React.FC<ComponentProductProps> = ({ product, className }) => {
  return (
    <div
      key={product.title}
      className={cn(
        className,
        '3xl:w-1/2 flex flex-col items-center sm:flex-row mb-12'
      )}
    >
      <picture className="h-40 w-40">
        <img alt={product.title} src={product.image} />
      </picture>
      <div className="flex flex-col text-center sm:max-w-[343px] sm:px-8 sm:text-left">
        <p className="mb-2 pt-4 text-2xl font-medium text-grey-900 sm:pt-0">
          {product.title}
        </p>
        <p className="text-xl font-normal text-grey-600">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export const ProductsSection = () => {
  return (
    <section className="mt-[5rem] flex flex-col items-center justify-center text-center">
      <h1 className="mb-12 text-3xl font-light text-grey-900 sm:text-[2.25rem]">
        Building better products
        <br />
        <span className="pt-2 font-medium">with end-to-end collaboration.</span>
      </h1>
      <div className="flex flex-wrap justify-center sm:max-w-[479px] 2xl:max-w-[1054px]">
        {Products.map((product) => {
          return (
            <Product
              key={product.title}
              product={product}
              className="last:mb-0"
            />
          );
        })}
      </div>
    </section>
  );
};
