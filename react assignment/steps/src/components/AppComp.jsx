import React, { Component } from "react";
import HeaderComp from "./HeaderComp.component";
import BannerComp from "./BannerComp.component";
import MarketingComp from "./MarketingComp.Container";
import FooterComp from "./footerComp.component";

class AppComp extends Component{
  render() {
    return <div><HeaderComp/>
          <BannerComp/>
          <MarketingComp/>
          <FooterComp/>
          </div>
  }};
export default AppComp;