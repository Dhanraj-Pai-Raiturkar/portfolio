import { ReactElement } from "react";

export type ResponsiveGridPropType = {
  children: ReactElement | ReactElement[];
};

const ResponsiveGrid: React.FC<ResponsiveGridPropType> = ({ children }) => {
  return (
    <div className="flex h-full w-full p-4 justify-start w-full items-center p-4 flex flex-col">
      <div className="p-4 grid gap-8 grid-cols-1 md:grid-cols-3 md:w-full lg:w-5/6">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
