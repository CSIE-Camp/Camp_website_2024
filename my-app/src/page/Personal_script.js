/*
後端串接預備完成(?)
前半是預備串接的code、後半是示範code要消除。
*/
// const Personal_RA = (btnLink,aLink) => {
//   const btn_e_a = document.querySelector(aLink)
//   btnLink.removeChild(btn_e_a);
// }

const PersonalScript = () => {
  //個人資料button
  //需要<a>的按鈕: 點此填寫(ppaib_open)、修改資料(ppaib_finish)
  const PPA_infor = document.querySelector("#ppa_information");
  const PPA_infor_btn = document.querySelector("#ppa_information #ppa_inside_button");
  if (PPA_infor.classList.contains("ppaib_open")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPA_infor_btn.appendChild(btn_a);
  } else if (PPA_infor.classList.contains("ppaib_finish")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPA_infor_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#ppa_information #ppa_inside_button a");
    btn_e_a.forEach((e) => {
      PPA_infor_btn.removeChild(e);
    });
  }
  //報名測驗button
  const PPA_quiz = document.querySelector("#ppa_quiz");
  const PPA_quiz_btn = document.querySelector("#ppa_quiz #ppa_inside_button");
  if (PPA_quiz.classList.contains("ppaib_open")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPA_quiz_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#ppa_quiz #ppa_inside_button a");
    btn_e_a.forEach((e) => {
      PPA_quiz_btn.removeChild(e);
    });
  }
  //Github綁定button
  const PPA_github = document.querySelector("#ppa_github");
  const PPA_github_btn = document.querySelector("#ppa_github #ppa_inside_button");
  if (PPA_github.classList.contains("ppaib_open")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPA_github_btn.appendChild(btn_a);
  } else if (PPA_github.classList.contains("ppaib_finish")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPA_github_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#ppa_github #ppa_inside_button a");
    btn_e_a.forEach((e) => {
      PPA_github_btn.removeChild(e);
    });
  }
  //點我報名、取消報名
  const PPR = document.querySelector("#pp_register #ppr_button");
  const PPR_btn = document.querySelector("#pp_register #ppr_button");
  if (PPR.classList.contains("pprb_open")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPR_btn.appendChild(btn_a);
  } else if (PPR.classList.contains("pprb_finish")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPR_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#pp_register #ppr_button a");
    btn_e_a.forEach((e) => {
      PPR_btn.removeChild(e);
    });
  }
  //上傳付款
  const PPAD_pay_ctrl = document.querySelector("#ppad_pay");
  const PPAD_pay_btn = document.querySelector("#ppad_pay #ppad_button");
  if (PPAD_pay_ctrl.classList.contains("ppadp_no")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPAD_pay_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#pp_pay #ppr_button a");
    btn_e_a.forEach((e) => {
      PPAD_pay_btn.removeChild(e);
    });
  }
  //家長同意書
  const PPAD_agree_ctrl = document.querySelector("#ppad_agreement");
  const PPAD_agree_btn = document.querySelector("#ppad_agreement #ppad_button");
  if (PPAD_agree_ctrl.classList.contains("ppada_no")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPAD_agree_btn.appendChild(btn_a);
  } else if (PPAD_agree_ctrl.classList.contains("ppada_fail")) {
    const btn_a = document.createElement("a");
    btn_a.href = "";
    PPAD_agree_btn.appendChild(btn_a);
  } else {
    const btn_e_a = document.querySelectorAll("#pp_agreement #ppr_button a");
    btn_e_a.forEach((e) => {
      PPAD_agree_btn.removeChild(e);
    });
  }
  //取消報名、這邊暫時不動
  const PP_cancel_btn = document.querySelector("#ppad_cancel");
  PP_cancel_btn.addEventListener("click", () => {
    window.confirm("確定要取消報名？");
  });

  /* --------------------  分隔  -------------------- */

  /*
  const PPAI_button_array = document.querySelectorAll("#ppa_inside_button");
  const PPAI_button_class = [
    "ppaib_close",
    "ppaib_open",
    "ppaib_finish",
    "ppaib_registered",
    "ppaib_error",
    "ppaib_close",
  ];
  PPAI_button_array.forEach((e) => {
    e.addEventListener("click", () => {
      for (let i = 0; i < 5; i++) {
        if (e.classList.contains(PPAI_button_class[i])) {
          //console.log("aaaa: "+e.classList);
          e.classList.replace(PPAI_button_class[i], PPAI_button_class[i + 1]);
          i = 10;
        }
      }
    });
  });
  const PPR_button = document.querySelector("#ppr_button");
  const PPR_button_class = [
    "pprb_close",
    "pprb_open",
    "pprb_finish",
    "pprb_registered",
    "pprb_error",
    "pprb_close",
  ];
  PPR_button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (PPR_button.classList.contains(PPR_button_class[i])) {
        PPR_button.classList.replace(PPR_button_class[i], PPR_button_class[i + 1]);
        i = 10;
      }
    }
  });

  const PPR_state = document.querySelector("#ppr_state");
  const PPR_state_class = ["pprs_no", "pprs_yes", "pprs_error", "pprs_no"];
  PPR_state.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      if (PPR_state.classList.contains(PPR_state_class[i])) {
        PPR_state.classList.replace(PPR_state_class[i], PPR_state_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPR_text = document.querySelector("#ppr_text");
  const PPR_text_class = ["pprt_no", "pprt_yes", "pprt_error", "pprt_no"];
  PPR_text.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      if (PPR_text.classList.contains(PPR_text_class[i])) {
        PPR_text.classList.replace(PPR_text_class[i], PPR_text_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPIA_RF = document.querySelector("#ppia_result_field");
  const PPIA_RF_class = [
    "ppiar_accept",
    "ppiar_waiting",
    "ppiar_wait_finish",
    "ppiar_not_pass",
    "ppiar_accept",
  ];
  const PP_admitted = document.querySelector("#pp_admitted");
  PPIA_RF.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (PPIA_RF.classList.contains(PPIA_RF_class[i])) {
        PPIA_RF.classList.replace(PPIA_RF_class[i], PPIA_RF_class[i + 1]);
        if (
          PPIA_RF.classList.contains(PPIA_RF_class[0]) ||
          PPIA_RF.classList.contains(PPIA_RF_class[2])
        ) {
          PP_admitted.classList.replace("pp_admitted_close", "pp_admitted_open");
        } else {
          PP_admitted.classList.replace("pp_admitted_open", "pp_admitted_close");
        }
        i = 10;
      }
    }
  });
  const PPAD_pay = document.querySelector("#ppad_pay");
  const PPAD_pay_class = ["ppadp_no", "ppadp_check", "ppadp_yes", "ppadp_error", "ppadp_no"];
  PPAD_pay.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (PPAD_pay.classList.contains(PPAD_pay_class[i])) {
        PPAD_pay.classList.replace(PPAD_pay_class[i], PPAD_pay_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPAD_agreement = document.querySelector("#ppad_agreement");
  const PPAD_agreement_class = [
    "ppada_no",
    "ppada_check",
    "ppada_yes",
    "ppada_fail",
    "ppada_error",
    "ppada_no",
  ];
  PPAD_agreement.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (PPAD_agreement.classList.contains(PPAD_agreement_class[i])) {
        PPAD_agreement.classList.replace(PPAD_agreement_class[i], PPAD_agreement_class[i + 1]);
        i = 10;
      }
    }
  });*/
};
export default PersonalScript;
