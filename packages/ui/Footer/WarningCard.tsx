const WarningCard = () => {
  return (
    <div className="h-[266px] w-[325px] bg-[#F1F1F1] py-[29px] px-[34px] rounded-lg">
      <img className="h-[39px] w-[39px]" src="./exclamation.png" alt="" />
      <p className="text-[12px] mt-[12px]">
        This website is not an original commercial platform. It serves as a
        project by Gaurav Singh to showcase his web development skills. The
        images utilized on this website have been sourced from the realme store
        website strictly for study purposes. Please note that no products or
        services are being sold through this website it is solely intended for
        demonstration purposes.
      </p>
    </div>
  );
};

export default WarningCard;
