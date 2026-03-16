"use client";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <Box className="flex min-h-screen items-center justify-center bg-gray-50 px-4"
    sx = {{ backgroundColor: "#121439" }}>
      <Box
        component="form"
        className="w-full max-w-xl rounded-xl bg-white p-6 shadow-lg"
        sx = {{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#c2c4dd" }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 700 , color: "#190c42bc" }}>
          Venue Booking
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, margin: 2 }}>
          <TextField
            name="Name-Lastname"
            label="Name-Lastname"
            variant="standard"
            fullWidth
          />

          <TextField
            name="Contact-Number"
            label="Contact-Number"
            variant="standard"
            fullWidth
          />

          <FormControl variant="standard" fullWidth>
            <InputLabel id="venue-label">Venue</InputLabel>
            <Select id="venue" labelId="venue-label" defaultValue="">
              <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
              <MenuItem value="Spark">Spark Space</MenuItem>
              <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
          </FormControl>

          <DateReserve />

          <Button variant="contained" name="Book Venue">
            Book Venue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
