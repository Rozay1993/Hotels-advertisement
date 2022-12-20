import "./ImageInfo.css";
import Icons from "./Icons";

function ImageInfo() {
  return (
    <>
      <div id="imageInfoTab">
        <div className="thisImageBox">
          <img src="/images/ba.jpeg" alt="img" />
        </div>
        <div className="ThisImageBoxInfo NunitoFont">
          <h4>BRIAN ATCHISON</h4>
          <ul className="NunitoFont">
            <li>SALES DIRECTOR</li>
            <li>
              <a className="text-white" href="tel:504-553-5106">
                504-553-5106
              </a>
            </li>
            <li>
              <a className="text-white" href="mailto:batchison@westinneworleans.com">
                EMAIL ME
              </a>
            </li>
            <li>
              <a className="text-white" href="http://westinneworleans.com/" target="_blank">
                VISIT WEBSITE
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="social_media_link">
        <Icons facebook="https://www.facebook.com" key="IconsGeneratee" />
      </div>
    </>
  );
}

export default ImageInfo;
