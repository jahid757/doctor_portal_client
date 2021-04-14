import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handelBlur = e => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(info);
    }
    const handelFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name)
        formData.append('email',info.email)
        formData.append('phone',info.phone)

        fetch('https://agile-thicket-24876.herokuapp.com/addDoctor',{
            method: 'POST',
            body: formData
        })


        e.preventDefault()
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email address</label>
                        <input onBlur={handelBlur} type="email" className="form-control" name="email" placeholder="Enter email" id="email" />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handelBlur} type="text" className="form-control" name="name" placeholder="Name" id="name" />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handelBlur} type="text" className="form-control" name="phone" placeholder="Phone" id="phone" />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="picture">Upload a image</label>
                        <input onChange={handelFileChange} type="file" className="form-control" id="picture" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;