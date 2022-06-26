interface RouteProps {
  path: string;
  children: any;
  currentPath: string;
}

const Route = ({ path, children, currentPath }: RouteProps) => {
  return currentPath === path ? children : null;
};

export default Route;
