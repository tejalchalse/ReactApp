import { useState } from "react";
import { toast } from "react-toastify";
const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [gender, genderchange] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault();
        let reobj = { id, name, phone, email, password, country, gender }
        //console.log(reobj);
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(reobj)
        }).then((res)=>{
            toast.success('Registered Sucessfully.')

        }).catch((err)=>{
            toast.error('Failed:'+err.message);
        });

     }
return (
    <div>
        <div className="d-flex  vh-100 justify-content-center align-items-center bg-primary'">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">

                    <div className="card-header">
                        <h1> User Registration</h1>
                    </div>
                    <div className="card-body">
                        <div className="row"></div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label> User Name <span className="errmsg">*</span></label>
                                <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label> Full Name <span className="errmsg">*</span></label>
                                <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label>Phone Number <span className="errmsg">*</span></label>
                                <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label> Email <span className="errmsg">*</span></label>
                                <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label> Password <span className="errmsg">*</span></label>
                                <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label>  Confirm Password <span className="errmsg">*</span></label>
                                <input type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="from-group">
                                <label> Country<span className="errmsg">*</span></label>
                                <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                    <option value=""> Select Your Country</option>
                                    <option value="india">India</option>
                                    <option value="USA"> USA</option>
                                    <option value="Australia"> Australia</option>
                                    <option value="Singapore"> Singapore</option>
                                    <option value="UK"> UK</option>
                                </select>
                            </div>
                            <div className="col-lg-8">
                                <div className="from-group">
                                    <label> Gender </label>
                                    <br></br>
                                    <input type="Radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                    <label>Male</label>
                                    <input type="Radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                    <label>Female</label>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary"> Register </button>
                        <button type="submit"  className="btn btn-danger ">  Back </button>
                    </div>
                </div>
            </form>

        </div>
    </div>

);
}
export default Register;