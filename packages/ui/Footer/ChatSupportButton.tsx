const ChatSupportButton = () => {
  return (
    <div className="flex border-2 border-black rounded-[38px] w-[124px] h-[30.934px] lg:w-[190.73px] lg:h-[46px] py-[8px] lg:py-[10px] px-[14px] lg:px-[23px] hover:bg-[#FFC700]">
        <img className="h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]  mr-[18px]" src="./support.png" alt="" />
        <h1 className=" text-[9px]  lg:text-[16px]">Chat Support</h1>
    </div>
  );
};

export default ChatSupportButton;