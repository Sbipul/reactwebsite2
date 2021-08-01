import Card from "./Card";
import CardData from "../Card.json"
function TrustArea(){
    // system03
//     let items = [];
//     for (let x = 0; x < CardData.length; x++) {
//         items.push(<Card icon={CardData[x].icon} cH={CardData[x].cH} para={CardData[x].para} />)
        
// }
    return (
        <div className="container-fluid px-5 text-center py-5">
            <h3>Trust & Reliability</h3>
            <h1>Trusted By Over 712,483 <br/> Awesome Customers</h1>
            <div className="row mt-5">
                {/* system04 */}
                {CardData.map((item)=> <Card icon={item.icon} cH={item.cH} para={item.para} />)}
                
                {/* system03 */}
                {/* {items} */}

                {/* system 02 */}
                {/* <Card icon={CardData[0].icon} cH={CardData[0].cH} para={CardData[0].para} />
                <Card icon={CardData[1].icon} cH={CardData[1].cH} para={CardData[1].para} />
                <Card icon={CardData[2].icon} cH={CardData[2].cH} para={CardData[2].para} />
                <Card icon={CardData[3].icon} cH={CardData[3].cH} para={CardData[3].para} /> */}

                {/* system 01 */}
                {/* <Card icon="fas fa-code ico" cH="World-Class Support" para="We build relationships with our customers & provide a professional level of support that you can trust."/>
                <Card icon="fab fa-chromecast ico" cH="World-Class Support" para="We build relationships with our customers & provide a professional level of support that you can trust."/>
                <Card icon="fas fa-bug ico" cH="World-Class Support" para="We build relationships with our customers & provide a professional level of support that you can trust."/> */}
            </div>
            
        </div>
    )
}
export default TrustArea;