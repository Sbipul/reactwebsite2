function Contact(){
    return (
        <div className="container-fluid p-5">
            <h1 className="text-center">Contact us</h1>
            <div className="row align-items-center">
                <div className="p-5 col-12 col-md-6">
                    <div className="text-center bg-aqua-light p-5 text-light">
                    <i class="text-light rounded-circle p-5 bg-primary-light fs-1 fas fa-hotel"></i>
                    <h2 className="fw-bold">Head office</h2>
                    <strong>shaseb load,narinda</strong>
                    <strong>Wari,Narinda </strong>
                    <strong>puran dhaka,bangladesh</strong>
                    
                    </div>
                </div>
                <div className="p-5 col-12 col-md-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                    {/* contact area end  */}
                </div>
        </div>
    </div>
    )
}
export default Contact;