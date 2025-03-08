import { Box, Button, TextField, MenuItem, Select, Typography ,InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >

      <Box display={"flex"}  justifyContent={"space-between"}>

            <Typography variant="h6" sx={{ color: "#074786", fontWeight: "bold" }}>
              Dashboard
            </Typography>
      
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "#03a1fc",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "10px",
                }}
            >
                  + New Assessment
            </Button>

      </Box>
      

      <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap", // Auto wrap on small screens
            alignItems: "center",
            justifyContent: "space-between",
          }}
      >
   
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
                width: "100%",
              }}
            >
                  {/* Search Bar */}
                  <TextField
                    placeholder="Search by Assessment Title"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon sx={{ color: "#DDE9F6", marginRight: 1 }} />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center", // Centers placeholder text
                        padding: "10px 14px", // Ensures proper vertical alignment
                        fontSize:"14px"
                      },
                    }}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      border:"1px solid #DDE9F6",
                      flexGrow: 1,
                      minWidth: "200px",
                      padding: 0, 
                      height: "40px",
                      "& fieldset": { border: "none" },
                    }}
                  />

                {[
                  "Category",
                  "Assessment Type",
                  "Assessment Status",
                  "Created By",
                  "Created On",
                ].map((label) => (
                  <Select
                    key={label}
                    defaultValue=""
                    displayEmpty
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      flexGrow: 1,
                      minWidth: "40px",
                      padding: 0, 
                      height: "40px", 
                      fontSize:"14px",
                      "& .MuiSelect-select": {
                                                padding: "8px 10px", // Reduce padding inside select box
                                                display: "flex",
                                                alignItems: "center",
                                              },
                      "& fieldset": { border: "1px solid #DDE9F6" },
                      "& .MuiSvgIcon-root": {
                                              fontSize: "18px", // Adjust dropdown arrow size
                                              marginLeft: "-8px", // Reduce gap between text and arrow
                                            },
                    }}
                  >
                    <MenuItem value="">{label}</MenuItem>
                  </Select>
                ))}

                <Typography
                  sx={{
                    color: "#03a1fc",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Reset Filter
                </Typography>

            </Box>
  
      </Box>

    </Box>
  );
};

export default FilterBar;
