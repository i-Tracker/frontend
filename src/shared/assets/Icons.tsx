import { SVGProps } from 'react';

export function Triangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.118 3H3.893A2.914 2.914 0 0 0 1.39 7.371L9.506 20.92a2.917 2.917 0 0 0 4.987.005l8.11-13.539A2.914 2.914 0 0 0 20.117 3z"
      ></path>
    </svg>
  );
}

export function CategoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 13.66a8 8 0 0 1-11.32 0L206 177.36A40 40 0 1 1 217.36 166l20.3 20.3a8 8 0 0 1 0 11.36M184 168a24 24 0 1 0-24-24a24 24 0 0 0 24 24"
      ></path>
    </svg>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z"
      ></path>
    </svg>
  );
}

export function NotificationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 10q0-2.5 1.113-4.587T6.1 1.95l1.175 1.6q-1.5 1.1-2.387 2.775T4 10zm18 0q0-2-.888-3.675T16.726 3.55l1.175-1.6q1.875 1.375 2.988 3.463T22 10zM4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"
      ></path>
    </svg>
  );
}

export function ArrowBack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"></path>
    </svg>
  );
}

export function TrashCanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"></path>
      <path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"></path>
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
      ></path>
    </svg>
  );
}
