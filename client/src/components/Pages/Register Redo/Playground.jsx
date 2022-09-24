import React from "react";


const Register = () => {
    return(
        <>
            <div className={"register_main_container"}>
                <div className={"register_left"}>
                    <div className="register_logo"></div>
                    <h1 className="register_create_heading">Create An Account</h1>
                    <h5 className="register_already_member">Already a Member? <a href="dashboard page">Sign in</a></h5>
                    <form>
                        <div type="number" className="reg_form_student_number"></div>
                        <div type="text" className="reg_form_username"></div>
                        <div type="email" className="reg_form_email"></div>
                        <div type="password" className="reg_form_password"></div>
                        <div type="password" className="reg_form_confirm_password"></div>
                        <div className="reg_form_create_btn">Create Account</div>
                    </form>
                </div>
                    <div className={"register_right"}></div>

            </div>
        </>
    )
}
// Change the divs in forms to Input with a capital i 
// Buttpon tag isn't stylable for some reason
export default Register