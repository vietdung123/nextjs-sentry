const WrapperComponent = ({ contacts }) => {
    console.log('props WrapperComponent', contacts);
  return <div>WrapperComponent</div>;
};


const withHOC = (key) => (WC) => {
  // eslint-disable-next-line react/display-name
  console.log('key', key);
  // eslint-disable-next-line react/display-name
  return (props) => {
    console.log({ props });
    return <WC {...props} />
  };
};

/* Static props can be passed down as function arguments */
const ContactListWithLoadIndicator = withHOC("contacts")(WrapperComponent);

const TestHOC = () => {
  return (
    <div>
      <ContactListWithLoadIndicator contacts={"xxx"} />
    </div>
  );
};

export default TestHOC;
