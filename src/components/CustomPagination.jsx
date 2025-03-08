import { Pagination, PaginationItem, TextField, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, FirstPage, LastPage } from "@mui/icons-material";

function CustomPagination() {
  return (
    <Box display="flex"  justifyContent={{xs:"center" , sm:"flex-end"}} alignItems="center" gap={1}>
      {/* First Page Icon */}
      <PaginationItem icon={<FirstPage />} />

      {/* Pagination Numbers */}
      <Pagination
        count={200}
        defaultPage={2}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              "&.Mui-selected": { bgcolor: "#0d6efd", color: "white" },
              "&:hover": { bgcolor: "#0d6efd", color: "white" },
            }}
          />
        )}
      />

      {/* Last Page Icon */}
      <PaginationItem icon={<LastPage />} />

      {/* Input Box */}
      <Box display={{ xs: "none", sm: "flex" }} alignItems={"center"} gap={1}>
          <TextField
            size="small"
            sx={{ width: 100 }}
            placeholder="Page No"
            InputAdornment={{ style: { textAlign: "center" } }}
          />
          of 200
      </Box>
    </Box>
  );
}

export default CustomPagination;
