interface CheckboxIndicatorProps {
  className?: string;
}

const CheckboxIndicatorIcon = ({ className }: CheckboxIndicatorProps) => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.364 0.322724C11.6276 0.523549 11.6785 0.900026 11.4776 1.16361L5.07765 9.56361C4.97272 9.70133 4.81341 9.78701 4.64066 9.79863C4.46791 9.81025 4.29856 9.74668 4.17613 9.62425L0.576127 6.02425C0.341812 5.78993 0.341812 5.41003 0.576127 5.17572C0.810441 4.94141 1.19034 4.94141 1.42465 5.17572L4.5392 8.29027L10.5231 0.436357C10.724 0.172774 11.1004 0.121899 11.364 0.322724Z"
      fill="white"
    />
  </svg>
);

const Indeterminate = ({ className }: CheckboxIndicatorProps) => (
  <svg
    width="10"
    height="2"
    viewBox="0 0 10 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.199219 1.00002C0.199219 0.668653 0.467848 0.400024 0.799219 0.400024L9.19922 0.400025C9.53059 0.400025 9.79922 0.668654 9.79922 1.00002C9.79922 1.3314 9.53059 1.60002 9.19922 1.60002L0.799219 1.60002C0.467848 1.60002 0.199219 1.3314 0.199219 1.00002Z"
      fill="white"
    />
  </svg>
);

export { CheckboxIndicatorIcon, Indeterminate };
