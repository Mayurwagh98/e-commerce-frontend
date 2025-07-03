import { Drawer } from "antd";

const CustomDrawer: React.FC = ({
  children,
  title,
  openDrawer,
  closeDrawer,
}: {
  children: React.ReactNode;
  title: string;
  openDrawer: boolean;
  closeDrawer: () => void;
}) => {
  return (
    <>
      <Drawer
        title={title}
        closable={{ "aria-label": "Close Button" }}
        onClose={closeDrawer}
        open={openDrawer}
        width={560}
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
