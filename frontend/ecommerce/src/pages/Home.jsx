import Flashsale from "../components/Flashsale"
import Newsletter from "../components/Newsletter"
import Slider from "../components/Slider"
const Home = ({setLoading, setProgress}) => {
  return (
    <div>
        <Slider/>
        <Flashsale  setLoading={setLoading} setProgress={setProgress}/>
        <Newsletter/>
    </div>
  )
}

export default Home