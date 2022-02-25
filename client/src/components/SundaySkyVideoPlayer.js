import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SundaySkyVideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const [sessionState, setSessionState] = useState();

  const firstName = searchParams.get("first_name");
  const acctType = searchParams.get("acct_type");
  const crbKeyId = searchParams.get("crb_key_id");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: `/api/sundaysky?first_name=${firstName}&acct_type=${acctType}&crb_key_id=${crbKeyId}`,
        // data: {
        //   data: {
        //     first_name: firstName,
        //     acct_type: acctType,
        //     crb_key_id: crbKeyId,
        //   },
        // },
      });

      if ((firstName, acctType, crbKeyId)) {
        setSessionState(result.data);
      }
    };

    fetchData();
  }, [firstName, acctType, crbKeyId]);

  useEffect(() => {
    if (sessionState) {
      createPlayer();
      console.log(sessionState);
    }
  }, [sessionState]);

  const createPlayer = () => {
    const sskyplayer = document.createElement("sundaysky-video");
    sskyplayer.setAttribute("id", "sskplayer");
    sskyplayer.setAttribute("session", sessionState);
    sskyplayer.setAttribute("transcript-button", "show");

    if (!document.getElementById("sskplayer")) {
      document.getElementById("sskydiv").appendChild(sskyplayer);
    }
  };

  return (
    <>
      <h1>Sunday Sky Video Player</h1>
      <div id="sskydiv"></div>
    </>
  );
};

export default SundaySkyVideoPlayer;
