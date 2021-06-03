const ColorsDescription = ({ children, className }) => {
  return (
    <p
      className={
        className +
        " " +
        "col-span-12 lg:col-span-7 rounded pl-5 py-5 pr-9 shadow-md flex items-center"
      }
    >
      {children}
    </p>
  );
};
export default ColorsDescription;
