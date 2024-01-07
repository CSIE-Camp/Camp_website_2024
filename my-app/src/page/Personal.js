import React, { useEffect } from "react";
import PersonalScript from "./Personal_script";
let actoncekey = 1;

export const Personal = () => {
  useEffect(() => {
    if (actoncekey !== 1) {
      PersonalScript();
    } else {
      actoncekey++;
    }
  }, []);
  return (
    <div id="page_personal">
      <div id="p_personal_container">
        <div id="pp_account_name">
          <div id="pp_an_up">帳號 : a12345678@gmail.com</div>
          <div id="pp_an_down">您的報名狀態</div>
          <hr></hr>
        </div>
        <div id="pp_account_field">
          <div id="ppa_information" className="ppaib_close">
            <div id="ppa_inside_text">填&zwj;寫&zwj;個&zwj;人資&zwj;料</div>
            <div id="ppa_inside_state"></div>
            <div id="ppa_inside_button"></div>
          </div>
          <div id="ppa_quiz" className="ppaib_close">
            <div id="ppa_inside_text">完&zwj;成&zwj;報&zwj;名測&zwj;驗</div>
            <div id="ppa_inside_state"></div>
            <div id="ppa_inside_button"></div>
          </div>
          <div id="ppa_github" className="ppaib_close">
            <div id="ppa_inside_text">綁定Github帳&zwj;號</div>
            <div id="ppa_inside_state"></div>
            <div id="ppa_inside_button"></div>
          </div>
        </div>
        <div id="pp_register" className="pprb_open">
          <div id="ppr_button"></div>
          <div id="ppr_center">
            <div id="ppr_state"></div>
            <div id="ppr_text"></div>
          </div>
        </div>
        <div id="pp_isadmission" className="ppiar_accept">
          <div id="ppia_top">錄取結果</div>
          <hr></hr>
          <div id="ppia_result_field">
            <div id="ppia_result"></div>
            <div id="ppia_back_is"></div>
          </div>
        </div>
        <div id="pp_admitted">
          <div id="ppad_pay" className="ppadp_no">
            <div id="ppad_text"></div>
            <div id="ppad_state"></div>
            <div id="ppad_button"></div>
          </div>
          <div id="ppad_agreement" className="ppada_no">
            <div id="ppad_text"></div>
            <div id="ppad_state"></div>
            <div id="ppad_button"></div>
          </div>
          <div id="ppad_cancel"></div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
