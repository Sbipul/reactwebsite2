import Anim from "../components/Anim"
import Heading from "./Heading";
function Carousel(){
    return (<div className="container-fluid p-5">
                <div className="row align-items-center">
                    <Heading />
                    <Anim />
                </div>
            </div>
    )
}
export default Carousel;