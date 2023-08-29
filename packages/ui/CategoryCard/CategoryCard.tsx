import { ReactNode } from "react";
import { ExploreButton } from "./ExploreButton";

export const CategoryCard = () => {
  return (
    <div className="h-[238px] w-[367px] lg:h-[326px] lg:w-[565px] bg-white rounded-lg shadow-lg p-[40px] lg:p-[41px]  border-radius-12px">
      <div>
        {/* Have to add the image anyway. */}
      </div>
      <div>
        <h1 className="font-inter text-[20px] lg:text-[40px]">Watches</h1>
        <p className="font-inter text-[11px] lg:text-[16px] mt-[30px]">
          Vivamus vitae tellus risus. Nam purus neque, placerat congue libero
          et, lobortis posuere augue. Praesent posuere a sem et auctor.
        </p>
        <ExploreButton/>
      </div>
    </div>
  );
};
