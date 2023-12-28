const LoginWithGoogle = () => {
  return (
    <>
      <div className="w-[471px] h-[79px] lg:h-[50.654px] lg:w-[302px] border-2 border-solid border-gray-300 rounded-lg bg-transparent flex justify-center items-center gap-6">
        <img
          src="/Google.png"
          alt="Google logo"
          className="w-[29px] h-[29px] lg:w-[46px] lg:h-[46px] flex-shrink-0 bg-lightgray bg-cover bg-center rounded-full"
        />
        <h1 className="text-gray-600 font-inter text-base font-normal">
          Login With Google
        </h1>
      </div>
    </>
  );
};

export default LoginWithGoogle;
