import { useState } from "react";
import { Options } from "../App";

interface IRoue {
  options: Options[];
}

const Roue = ({ options }: IRoue) => {
  const [totalDegree, setTotalDegree] = useState(0);

  //set default degree (360*5)
  const degree = 1800;
  //number of clicks = 0
  let clicks = 0;

  const handleClick = () => {
    //add 1 every click
    clicks++;

    /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
    const newDegree = degree * clicks;
    const extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    setTotalDegree(totalDegree + newDegree + extraDegree);

    /*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
    /*$("#wheel .sec").each(function () {
      let t = $(this);
      let noY = 0;

      let c = 0;
      let n = 700;
      let interval = setInterval(function () {
        c++;
        if (c === n) {
          clearInterval(interval);
        }

        let aoY = t.offset().top;
        $("#txt").html(aoY);
        console.log(aoY);

        /*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn *
        if (aoY < 23.89) {
          console.log("<<<<<<<<");

          //fais touner un chouille le bouton spin
          $("#spin").addClass("spin");
          setTimeout(function () {
            $("#spin").removeClass("spin");
          }, 100);
          
        }
      }, 10);


      noY = t.offset().top;
    });*/
  };
  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div id="wrapper">
        <div id="wheel">
          <div
            id="inner-wheel"
            style={{ transform: "rotate(" + totalDegree + "deg)" }}
          >
            <div className="sec">
              <span className="fa fa-bell-o"></span>
            </div>
            <div className="sec">
              <span className="fa fa-comment-o"></span>
            </div>
            <div className="sec">
              <span className="fa fa-smile-o"></span>
            </div>
            <div className="sec">
              <span className="fa fa-heart-o"></span>
            </div>
            <div className="sec">
              <span className="fa fa-star-o"></span>
            </div>
            <div className="sec">
              <span className="fa fa-lightbulb-o"></span>
            </div>
          </div>

          <div id="spin" className="spin" onClick={handleClick}>
            <div id="inner-spin"></div>
          </div>

          <div id="shine"></div>
        </div>

        <div id="txt"></div>
      </div>
      {options.map((input, index) => {
        return (
          <div key={index}>
            {input.id} -{input.name}-
            {input.checked ? <p>Check</p> : <p>Not check</p>}
          </div>
        );
      })}
    </>
  );
};

export default Roue;
