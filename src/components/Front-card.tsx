import { IconSwitchHorizontal } from "@tabler/icons-react";

export const FrontCard = () => {
  return (
    <div className="relative w-70 p-4 overflow-hidden shadow-lg rounded-lg">
      <img src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg" className="absolute inset-0 blur-lg flex flex-col gap-10"/>
      <div className="relative z-10 flex flex-col gap-10 h-full">
        <div className="flex justify-between items-center">
          <img src="https://companieslogo.com/img/orig/V.D-e36aebe0.png?t=1720244494" className="w-10" alt="" />
          <IconSwitchHorizontal stroke={1} className="text-gray-400" size={15} />
        </div>

        <div className="flex flex-col justify-end h-full gap-5">
          <div className="flex gap-5 font-bold">
            <span>2345</span> <span>5432</span> <span>4456</span>{" "}
            <span>0000</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Juelson Junior</p>
            <p className="text-gray-400">08/25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex justify-between">
        <h3>VISA</h3>
        <IconSwitchHorizontal stroke={1} />
      </div>

      <div className="flex flex-col justify-end h-full gap-5">
        <div className="flex gap-10 font-bold">
          <span>2345</span> <span>5432</span> <span>4456</span>{" "}
          <span>0000</span>
        </div>
        <div className="flex justify-between">
          <p>Juelson Junior</p>
          <p>08/25</p>
        </div>
      </div> */
}
