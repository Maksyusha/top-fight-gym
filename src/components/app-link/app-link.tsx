"use client";

import Script from "next/script";
import './app-link.scss'

const AppLink = () => {
  return (
    <Script
      type="text/javascript"
      async={true}
      id="smart_app_widget_script"
      data-links="eyJhcHBTdG9yZVVybCI6Imh0dHBzOlwvXC9hcHBzLmFwcGxlLmNvbVwvcnVcL2FwcFwvbW9iaWZpdG5lc3NcL2lkOTg2Mjc4ODM2IiwiZ29vZ2xlUGxheVVybCI6Imh0dHBzOlwvXC9wbGF5Lmdvb2dsZS5jb21cL3N0b3JlXC9hcHBzXC9kZXRhaWxzP2lkPWNvbS5pdHJhY2subW9iaWZpdG5lc3NkZW1vNzU2MTcxJnBjYW1wYWlnbmlkPXdlYl9zaGFyZSIsImh1YXdlaUFwcEdhbGxlcnlVcmwiOiJodHRwczpcL1wvYXBwZ2FsbGVyeS5odWF3ZWkuY29tXC8jXC9hcHBcL0MxMDExNTEzMDEiLCJydVN0b3JlVXJsIjpudWxsfQ=="
      data-domain="//mobifitness.ru"
      data-background="#111111"
      data-border="#ffffff"
      data-color="#ffffff"
      data-position="bottom"
      data-text="Уважаемый клиент! У нас есть мобильное приложение!"
      src="//mobifitness.ru/smartapp-widget/js/code.js"
    />
  );
};

export default AppLink;
