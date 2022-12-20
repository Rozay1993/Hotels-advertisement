/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { firstName, lastName, company, email, password, repeatPassword } = formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    company: companyV,
    email: emailV,
    password: passwordV,
    repeatPassword: repeatPasswordV,
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5" style={{ textAlign: "center" }}>
          EVENT INQUIRY
        </MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="First Name" name="firstname" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Last Name" name="lastname" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Title" name="title" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Company" name="companyName" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Phone" name="phonenumber" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField type="email" label="Email" name="emailAddres" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Type of event" name="typeofevent" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField type="number" label="Number of people" name="numberOfPeople" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MDTypography className="eventEqueryDate">Start Date</MDTypography>
            <FormField type="date" name="startDate" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDTypography className="eventEqueryDate">End Date</MDTypography>
            <FormField type="date" name="endDate" />
          </Grid>
        </Grid>

        <Grid container spacing={12}>
          <Grid item xs={12} sm={12}>
            {/* <FormField
              type="text"
              label="Requirments, Questions, & Additional Details"
              name="questions"
            /> */}
            <textarea
              style={{
                background: "transparent",
                border: "1.5px solid #d2d6da",
                width: "100%",
                padding: "8px 2px;",
                height: "97px",
                fontSize: "15px",
                fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',
                color: "white",
                padding: "4px 7px",
                borderRadius: "5px",
              }}
            >
              Requirements, Questions, &amp; Additional Details
            </textarea>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
