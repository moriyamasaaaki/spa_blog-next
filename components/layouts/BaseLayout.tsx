import Header from "../shared/Header";

const BaseLayout = (props): any => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default BaseLayout;
