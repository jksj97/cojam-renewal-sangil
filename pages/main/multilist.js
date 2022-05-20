import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import $ from 'jquery'; 


function Index() {

    let [multiquestCreatorface, thiscreator] = useState(['https://i.imgur.com/8AejkT6.png']);
    let [multiquestCreatorName, thiscreatorName] = useState(['electrifyingopera']);
    
    let [multiquestCTCount, thisquestCTCount] = useState(['190,132']);

    let [multiDdayTime, thisToDdayTime] = useState(['1:23:16']);


    var i = 0;
    function move() {
    if (i == 0) {
        i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

    function multiClick(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);

        $(".muti-content").not(targetBox).hide();
        $(targetBox).show();
    }


  return (

    <div>
        <div className="mutiTop">
            <div className="select-box">
            </div>
            <a href="/QuestList">View All Quest</a>
        </div>

            <div className="one muti-content">
                h11
            </div>

            <div className="two muti-content">
                hi2
            </div>

            <div className="three muti-content">
                hi3
            </div>

            <div className="four muti-content">
                hi4
            </div>

            <div className="five muti-content">
                hi5
            </div>

            <div className="six muti-content">
                hi6
            </div>

            <div className="sevon muti-content">
                hi7
            </div>
        </div>
  );
}



export default Index;