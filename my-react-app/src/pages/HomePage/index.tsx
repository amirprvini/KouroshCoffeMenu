import { useEffect } from "react"
import { getAllClinets, getUserWithSeesion } from "../../components/services/clientApis"

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (): JSX.Element => {


  useEffect(()=>{

    getAllClinets().then((res)=>{
      console.log('clients: ' , res)
    })
    

    getUserWithSeesion().then((res)=>{
      console.log('user with seesion: ' , res);
    })
    
  },[])

  return <div className='homePageWrapper bg-kouroshTower bg-center w-full min-h-screen flex flex-col gap-5'>
  </div>
}

export default HomePage