// import React from "react";

export default function AboutLayout({
  children,
  details,
  details2,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  details2: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{details}</div>
      <div>{details2}</div>
    </div>
  );
}
