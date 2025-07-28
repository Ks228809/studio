export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M23.3333 10.6667L19.3333 4L15.3333 10.6667V24H23.3333V10.6667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3333 24V14.6667"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33333 16L12 12.6667L16.6667 16V24H7.33333V16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18.6667C24 18.6667 25.3333 20 26.6667 20C28 20 29.3333 18.6667 29.3333 18.6667C29.3333 16.6667 28 14.6667 26.6667 14.6667C25.3333 14.6667 24.6667 16 24.6667 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 28H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline text-xl font-bold">Mekoin</span>
    </div>
  );
}
