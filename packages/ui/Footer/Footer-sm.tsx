import ChatSupportButton from "./ChatSupportButton";

export const FooterSm = () => {
  return (
    <div className="h-[239px] flex flex-col  items-center px-[35px] bg-white">
          <button className="font-inter font-bold text-[20px] mb-[20px]">Support</button>
          <button className="font-inter font-bold text-[20px] mb-[20px]">BuyIt</button>
          <button className="font-inter font-bold text-[20px] mb-[20px]">Contact</button>
          <ChatSupportButton />
    </div>
  );
};
