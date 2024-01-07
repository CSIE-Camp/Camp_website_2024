import React, { useState } from "react";

export const Admin = () => {
  const adminTableSearch = () => {
    let input = document.getElementById("adminSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("adminTable1");
    let tr = table.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByClassName("td")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  const [SystemSwitch, setSystemSwitch] = useState(true);
  function handleClickOpen() {
    setSystemSwitch(false);
  }

  return (
    <div className="adminFlex">
      <h1>帳號: admin666@gmail.com</h1>
      <h1>系統開關</h1>
      <div className="adminSystemSwitch">
        <div className="left">
          <p>報名系統</p>
          <span>{SystemSwitch ? "開放中" : "已關閉"}</span>
          <button onClick={handleClickOpen}>{SystemSwitch ? "開放中" : "已關閉"}</button>
        </div>
        <div className="right">
          <p>錄取狀態查詢</p>
          <span>已關閉</span>
          <span>Off</span>
        </div>
      </div>
      <div className="adminPaymentStatus">
        <h1>匯款狀態</h1>
        <hr className="bar" width="100%"></hr>
        <div className="adminSearchFilter">
          <button>聯絡資訊</button>
          <button>成績審查</button>
          <button>匯款審查</button>
          <button>家長同意書審查</button>
        </div>
      </div>

      <form className="adminSearch">
        <input
          type={"text"}
          id="adminSearch"
          onKeyUp={adminTableSearch}
          placeholder="輸入姓名以搜尋資料"
        />
        <input type="submit" hidden />
      </form>

      <div className="table" id="adminTable1">
        <div className="tr">
          <div className="th">姓名</div>
          <div className="th">Email</div>
          <div className="th">聯絡電話</div>
          <div className="th">個人照</div>
        </div>
        <div className="tr">
          <div className="td">王小明</div>
          <div className="td">example@gmail.com</div>
          <div className="td">0966-000000</div>
          <div className="td">
            <span>點擊查看</span>
          </div>
        </div>
      </div>
      <div className="table" id="adminTable2">
        <div className="tr">
          <div className="th">姓名</div>
          <div className="th">成績</div>
          <div className="th">備註</div>
          <div className="th">審查資料</div>
        </div>
        <div className="tr">
          <div className="td">王小明</div>
          <div className="td">請輸入成績</div>
          <div className="td">請輸入備註</div>
          <div className="td">
            <span>點擊查看</span>
          </div>
        </div>
      </div>
      <div className="table" id="adminTable3">
        <div className="tr">
          <div className="th">姓名</div>
          <div className="th">匯款日期</div>
          <div className="th">匯款帳號</div>
          <div className="th">帳號後五碼</div>
        </div>
        <div className="tr">
          <div className="td">王小明</div>
          <div className="td">請輸入備註</div>
          <div className="td">000011112222</div>
          <div className="td">12345</div>
        </div>
      </div>
      <div className="table" id="adminTable4">
        <div className="tr">
          <div className="th">姓名</div>
          <div className="th">緊急聯絡人</div>
          <div className="th">家長同意書</div>
        </div>
        <div className="tr">
          <div className="td">王小明</div>
          <div className="td">王大明</div>
          <div className="td">點擊查看</div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
