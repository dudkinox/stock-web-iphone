import { useEffect, useState } from "react";
import PaymentService from "../../services/PaymentService";

export default function HeaderMainContent() {
  const [paymentTotal, setPaymentTotal] = useState<string>("");

  useEffect(() => {
    const major = sessionStorage.getItem("major") ?? "";
    PaymentService.PaymentSummary(major).then((res) => {
      setPaymentTotal(res.data);
    });
  }, [setPaymentTotal]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 mt-3">
            <div className="info-box">
              <span className="info-box-icon main-bg elevation-1">
                <i className="fas fa-cog"></i>
              </span>
              <div className="info-box-content mx-2">
                <span className="info-box-text">
                  สรุปยอดขายทั้งหมด: {paymentTotal} บาท
                </span>
                <span className="info-box-text">กำไร: บาท</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
