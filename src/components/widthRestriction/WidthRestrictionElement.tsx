import { Outlet } from "react-router-dom";

export default function WidthRestrictionElement() {
  return (
    <div className="max-w-[1250px] m-auto">
      <Outlet />
    </div>
  );
}
