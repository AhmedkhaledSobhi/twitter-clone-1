import React, {FormEvent, useState} from "react";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";
import TwInput from "../tw-input/tw-input";
import type {Credentials} from "../../hooks/useAuth";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../Loading/loading-spinner";
import useGetProfileInfo from "../../hooks/useGetProfileInfo";


const googleIconColors = {
    background: "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent"
}


const INITIAL_VALUE: Credentials = {
    username: "",
    password: ""
}
export default function Login() {
    const [show, setShow] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loginData, setLoginData] = useState(INITIAL_VALUE);
    const {login, isLoading} = useAuth();
    const setUsername = useGetProfileInfo();
    const navigate = useNavigate();

    const isFormValid = () => {
        const form = document.forms["loginForm"];
        setIsDisabled(!form.checkValidity())
    }

    const removeModal = () => {
        document.getElementById("login-modal").classList.remove("show");
        document.body.removeAttribute("style");
        document.body.classList.remove("model-open");
        document.body.removeChild(document.querySelector(".modal-backdrop.fade.show"));
    }

    const handelSubmit = (event: FormEvent) => {
        event.preventDefault()
        login({
            username: loginData?.username,
            password: loginData?.password
        }).then(e => {
            setUsername(loginData?.username);
            navigate("/explore", {replace: true});
            removeModal();
        })
    }
    const togglePasswordVisibility = () => setShow(!show);

    function getFrom() {
        return <div className="d-flex flex-column align-items-center login-Form">
            <h2 className=""><b>Sign in to Twitter</b></h2><br/>
            <div className={"w-75 d-flex flex-column justify-content-center align-items-stretch"}>
                <TwButton
                    btnStyle={"outline-dark"}
                    classes={"rounded-5 py-2 my-4"}
                >
                    <i className="fab fa-google fa-1x mx-2" style={googleIconColors}></i>
                    Sign in with Google
                </TwButton>

                <TwButton
                    btnStyle={"outline-dark"}
                    classes={"rounded-5 py-2"}
                >
                    <i className="bi bi-apple text-dark mx-2"></i>
                    Sign in with Apple
                </TwButton>
            </div>

            <div className={"d-flex my-3 w-75 justify-content-center align-items-center"}>
                <div className={"w-100 border border-secondary border-bottom border-0"}></div>
                <div className={"px-2"}>or</div>
                <div className={"w-100 border border-secondary border-bottom border-0"}></div>
            </div>

            {/* input box */}
            <form
                onChange={isFormValid}
                name={"loginForm"}
                onSubmit={handelSubmit}
                className="gy-4 w-75 row row-cols-1 justify-content-center align-items-center"
            >
                <div className="col">
                    <TwInput
                        id="username"
                        labelText={"Username"}
                        className="form-control py-3"
                        other={{
                            name: "username",
                            required: true,
                            // minLength: 8,
                            // pattern: "(\\w{1,15})",
                            onChange: (e) => {
                                setLoginData({...loginData, username: e?.target?.value})
                            }
                        }}
                    />
                </div>
                <div className="col">
                    <div className={"position-relative"}>
                                    <span
                                        className="p-0 fs-6 fw-light text-secondary"
                                    >
                                        Make sure it’s 8 characters or more.
                                    </span>
                        <TwInput
                            labelText={"Password"}
                            className="form-control py-3"
                            type={show ? "text" : "password"}
                            other={{
                                name: "password",
                                // required: true,
                                // minLength: 8,
                                onChange: (e) => {
                                    setLoginData({...loginData, password: e?.target?.value})
                                }
                            }}
                            id="password"
                        />
                        <i
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "3%"
                            }}
                            className={!show ? "bi bi-eye" : "bi bi-eye-slash"}
                            onClick={togglePasswordVisibility} id="PasswordShowing"
                        ></i>
                    </div>
                </div>
                <div className="col">
                    <TwButton
                        btnStyle={"outline-dark"}
                        classes={"rounded-5 w-100"}
                        other={{
                            type: "submit",
                            disabled: isDisabled
                        }}
                    >
                        Login
                    </TwButton>
                </div>
                <div>
                    <TwButton
                        btnStyle={"outline-dark"}
                        classes={"rounded-5 py-2 w-100"}
                    >
                        Forget Password ?
                    </TwButton>
                </div>
                <div className={"mt-5 my-5 pt-3"}>
                    <p className="text-secondary-emphasis fw-light ">
                        Don't have an account ? {" "}
                        <TwModal.ModalButton
                            targetId={"signup-modal"}
                            btnStyle={"btn-link p-2 border-none"}
                            classes={"text-primary fw-light"}
                            title={"Sign up"}
                        />
                    </p>
                </div>
            </form>
        </div>;
    }

    return (
        <div>
            <TwModal id={"login-modal"} modalStyle={"modal-dialog-scrollable"}>
                <TwModal.Header classes={"text-dark"} defaultHeader={true}/>
                <TwModal.Body>
                    {isLoading
                        ? <LoadingSpinner/>
                        : getFrom()
                    }
                </TwModal.Body>
            </TwModal>
        </div>
    );
}
