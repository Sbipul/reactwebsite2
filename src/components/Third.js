import ThirdLeft from "./ThirdLeft";
import ThirdRight from "./ThirdRight";
function Third(){
    return(
        <section>
            <div className="container-fluid px-5 py-5">
                <div className="row px-5 align-items-center">
                    <ThirdLeft />
                    <ThirdRight />
                </div>
            </div>
        </section>
    )
}
export default Third;