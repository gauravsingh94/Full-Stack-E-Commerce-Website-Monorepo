import ChatSupportButton from "./ChatSupportButton";
import WarningCard from "./WarningCard";

export const FooterLg = () => {
  return (
    <div className="h-[370px] bg-white flex justify-between px-[127px] py-[62px] font-inter">
      <div>
        <h1 className=" font-bold text-[20px] mb-[20px]">Support</h1>
        <p>Brand</p>
        <p>FAQ</p>
        <p>User Guide</p>
        <p>Service Centers</p>
        <p>E Waste Management</p>
        <p>Term & Conditions</p>
      </div>
      <div>
        <h1 className="font-bold text-[20px] mb-[20px]">About BuyIt</h1>
        <p>Our Brand</p>
        <p>New Classroom</p>
        <p>Retail Store</p>
        <p>Declaration</p>
      </div>
      <div>
        <h1 className="font-bold text-[20px] mb-[20px]">Contact</h1>
        <p>random@123</p>
        <p>random@123</p>
        <p>random@123</p>
        <div className="mt-[30px]">
          <ChatSupportButton />
        </div>
      </div>
      <div>
        <WarningCard/>
      </div>
    </div>
  );
};
