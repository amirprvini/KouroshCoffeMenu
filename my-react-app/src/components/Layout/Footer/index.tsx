const Footer: React.FC = (): JSX.Element => {

  return <div className={`bg-black text-white w-full px-2 py-1 h-min flex flex-col gap-3 justify-center items-center`}>

    <div className="logoWrapper w-full flex justify-center">
      <img src="./images/kouroshLogo.png" alt="footerLogo" width='400px'/>
    </div>

    <div className="madeByWrapper w-full flex flex-col gap-2 justify-center items-center">
        
        <div className="phoneWrapper text-2xl font-Poppins w-full flex justify-center">
            <h3 className="phoneTitle ">02126376920</h3>
        </div>

        <div className="phoneWrapper text-2xl font-Poppins mb-4">
            <h3 className="phoneTitle">1-1-110</h3>
        </div>

        <h2 className="madeBy font-dana text-lg sm:text-xl lg:text-2xl">طراحی و اجرا توسط امیر پروینی</h2>
    </div>

  </div>
}

export default Footer