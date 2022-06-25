const Header = ({ title }: { title?: string }) => {
  return <header>{title || "Default"}</header>;
};

export default Header;
