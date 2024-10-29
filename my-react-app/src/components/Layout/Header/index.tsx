
const Header: React.FC = (): JSX.Element =>{

  return <div className={`headerWrapper w-full flex-col gap-2 sticky top-0 z-10 `}>
        
    <div className="laptopNav  relative pr-4 border-b border-neutral-400 lg:px-4 flex justify-between lg:justify-around items-center shaddow-md h-32 bg-white shadow-md ">

        <div className="logoWrapper w-1/5 h-full flex justify-center items-center cursor-pointer">
            <img src="./images/kouroshLogo2.png" alt="kouroshLogo" width='100px'/>
        </div>

    </div>

  </div>
}

export default Header