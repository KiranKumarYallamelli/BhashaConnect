import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const sendOtp = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      setStep(3);
    } else {
      alert("Invalid OTP");
    }
  };

  const createAccount = (e) => {
    e.preventDefault();
    alert("Account Created Successfully");
    navigate("/");
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100">

      {/* LEFT IMAGE */}
      <div className="w-50">
        <img
          src="sign-in-image.avif"
          alt="Signup"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-50 d-flex flex-column justify-content-center align-items-center">
        <Form style={{ width: "70%" }}>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  maxLength={10}
                  placeholder="Enter mobile number"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />
              </Form.Group>
              <Button className="w-100" onClick={sendOtp}>
                Send OTP
              </Button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100" onClick={verifyOtp}>
                Verify OTP
              </Button>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Create username" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create password" />
              </Form.Group>

              <Button className="w-100" onClick={createAccount}>
                Create Account
              </Button>
            </>
          )}
        </Form>

        {/* ✅ SAME POSITION AS LOGIN PAGE */}
        <div className="mt-3">
          Already have an account?{" "}
          <span
            onClick={handleNavigateToLogin}
            className="text-primary text-decoration-underline"
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
