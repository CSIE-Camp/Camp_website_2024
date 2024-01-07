import React from "react";

const Payment = () => {
  return (
    <div id="payment">
      <div className="paymentText">
        <h3>繳費注意事項</h3>
        <p>詳情未公布請洽官方查詢 : 臺師大資工營 NTNU CSIE Camp | Facebook</p>
        <p>繳費帳號: 0000 1111 2222 33</p>
      </div>

      <form className="paymentFlex">
        <label for="date">轉帳/匯款日期</label>
        <input type="date" id="paymentDate" name="paymentDate" />
        <label for="date">轉帳/匯款日期</label>
        <label for="paymentAccount">帳戶名稱</label>

        <input type="text" id="paymentAccount" />
        <label for="paymentAccountNum">帳戶後五碼</label>

        <input type="text" id="paymentAccountNum" />

        <button type="submit">送出</button>
      </form>
    </div>
  );
};

export default Payment;
