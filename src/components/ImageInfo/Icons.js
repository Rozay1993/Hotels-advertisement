import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
// import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
// import DraftsIcon from "@mui/icons-material/Drafts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  outline: "none",
  boxShadow: 24,
  p: 4,
};

function Icons(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let currentLink = window.location.href;

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }
  function copySiteLink() {
    let link = window.location.href;
    copyTextToClipboard(link);
  }
  function copyEmbed() {
    let link = window.location.href;
    let string = `<iframe width="500" height="500" src="${link}" title="${document.title}" frameborder="0" allowfullscreen></iframe>`;
    copyTextToClipboard(string);
  }
  let openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/WestinNewOrleans/" className="" target="_blank">
          <svg
            style={{ fill: "#222224" }}
            width="12"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/accounts/login/?next=/westinneworleans/"
          className=""
          target="_blank"
        >
          <svg
            style={{ fill: "#222224" }}
            width="16"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/westinnola" className="" target="_blank">
          <svg
            style={{ fill: "#222224" }}
            width="16"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/brianatchison/" className="" target="_blank">
          <svg
            style={{ fill: "#222224" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </li>
      <li>
        <a onClick={handleOpen}>
          <svg
            style={{ fill: "#222224" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="16"
            height="20"
          >
            <path d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z" />
          </svg>
        </a>
      </li>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ zIndex: "9999999999999" }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBgBox" sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(`mailto:?&subject=Check%20Out%20The%20Westin%20New%20Orleans%20OneViewer%21&body=View%20the%20Westin%20New%20Orleans%20OneViewer%20here%20-%20${currentLink}`)
                }
              >
                <ListItemIcon>
                  <MailOutlineRoundedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(
                    `sms:?&body=Check%20out%20The%20Westin%20New%20Orleans%20OneViewer%21%20${currentLink}`
                  )
                }
              >
                <ListItemIcon>
                  <MessageRoundedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Text" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton onClick={() => copySiteLink()}>
                <ListItemIcon>
                  <ContentCopyRoundedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Copy Link" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton onClick={() => copyEmbed()}>
                <ListItemIcon>
                  <CodeRoundedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Embed" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(
                    `https://www.facebook.com/sharer/sharer.php?u=${currentLink}&t=Check%20out%20The%20Westin%20New%20Orleans%20OneViewer!&quote=Check%20out%20The%20Westin%20New%20Orleans%20OneViewer!&body=Check%20out%20The%20Westin%20New%20Orleans%20OneViewer!`
                  )
                }
              >
                <ListItemIcon>
                  <FacebookOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(
                    `https://twitter.com/intent/tweet?text=Check%20Out%20The%20Westin%20New%20Orleans%20OneViewer%21 ${currentLink}&related=AddToAny,micropat`
                  )
                }
              >
                <ListItemIcon>
                  <svg
                    width="20"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Twitter" />
              </ListItemButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${currentLink}`
                  )
                }
              >
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Linkedin" />
              </ListItemButton>
            </Grid>

            <Grid item xs={12} sm={6} xl={6}>
              <ListItemButton
                onClick={() =>
                  openLink(
                    `https://wa.me/?text=Check out The Westin New Orleans OneViewer! ${currentLink}`
                  )
                }
              >
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="WhatsApp" />
              </ListItemButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </ul>
  );
}
export default Icons;
