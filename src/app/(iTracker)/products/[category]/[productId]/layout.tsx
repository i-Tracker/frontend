import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 w-full flex flex-col">{children}</div>;
}
