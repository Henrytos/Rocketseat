export function Title({ ...props }) {
  return <h1 className="text-5xl font-extrabold font-baloo pb-4" {...props} />;
}

export function SubTitle({ ...props }) {
  return (
    <h2
      className="text-xl font-light font-baloo pb-16 text-base-subtitle"
      {...props}
    />
  );
}

export function Text({ ...props }) {
  return <p className="font-light text-base-text" {...props} />;
}

export function Content({ ...props }) {
  return <div className=" flex gap-3 items-center" {...props} />;
}
