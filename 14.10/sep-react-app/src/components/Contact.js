import { Typography, Card, FormControl, TextField, Button } from "@mui/material"
const Contact = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: "450px",
          margin: "auto",
          marginTop: "100px",
          padding: "20px"
        }}
      >
        <Typography
          variant="h4"
          align="center"
          marginBottom="20px"
        >
          Contact form
        </Typography>
        <FormControl sx={{ gap: "20px", width: "100%" }}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            label="First Name"
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            label="Last Name"
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            id="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
          />
          <TextField
            required
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            id="message"
            type="text"
            placeholder="Your message"
            label="Message"
          />
          <Button
            variant="outlined"
            sx={{ width: "50%", margin: "auto" }}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </Card>
    </>
  )
}

export default Contact
