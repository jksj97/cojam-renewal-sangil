import React, { useState, Component } from 'react';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-visionlink-topArea">
          <h1 className="visionlink-tit">Do you want to know <br /> about Cojam?</h1>
          <span className="visionlink-subtit">go our vision</span>
        </div>


        <div className="footer-midArea">
          <dl className="mid-contect">
            <dt>
              <h4>Contact Us</h4>
              <span>The Tara Building, Tara Street, Dublin 2</span><br />
              <span>Telegram @cojamkorea</span><br />
              <span>ask@cojam.io</span>
            </dt>
            <dd>
              <h4>Whitepapers</h4>
              <button className="btn-Docs"><span>Docs</span></button>
            </dd>
          </dl>
      </div>

      <div className="footer-btomArea">
        <h1 className="bot-tit"><span>SNS</span></h1>
        <div className="footer-bottomsns">
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">Naver Blog</a></li>
            <li><a href="#">KaKao</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}


export default Footer;