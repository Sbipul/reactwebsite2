import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return (
            <section className="bg-success-light text-light">
                <div className="container p-5">
                <div className="row align-items-center">
                <div className="col-12 p-5 col-md-3">
                    <div className="d-flex align-items-center">
                        <img className="hw me-2 shadow-lg" src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"/>
                        <strong>Pixel Perfect</strong>
                    </div>
                    <p>This is column one</p>
                    <p>This is column one</p>
                    <p>This is column one</p>
                </div>
                <div className="p-5 col-12 col-md-3">
                <p>This is column one</p>
                    <p>This is column two</p>
                    <p>This is column two</p>
                    <p>This is column two</p>
                </div>
                <div className="p-5 col-12 col-md-3">
                    <p>This is column three</p>
                    <p>This is column three</p>
                </div>
                <div className="p-5 col-12 col-md-3">
                    <p>This is column four</p>
                    <p>This is column four</p>
                    <p>This is column four</p>
                    <p>This is column four</p>
                    <p>This is column four</p>
                </div>
            </div>
            <br/>
            <p className="text-center">All right reserved by bipul chandro roy</p>
            </div>
            </section>     
        )
    }
}
export default Footer;