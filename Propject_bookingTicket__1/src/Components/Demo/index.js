import React from 'react'

export default function Demo() {
  let time = 6;
  const interval = () => setInterval(function () {
    time--;
    document.getElementById('Label1').innerHTML = "" + time + " seconds"
    if (time == 0) {
      // stop timer
      clearInterval(interval);
      // click
      document.getElementById('thebutton').click();
    }
  }, 1000)


  return (
    <div className="container">
      <div>
        <p id="Label1"> Time </p>
        <button  type="submit" id="thebutton" onClick={interval()}>click</button>
        <p id="Label2" style={{ color: 'red' }}> </p>
      </div>

    </div >
  )

}




