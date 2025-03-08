import { Card, CardContent, Typography, Chip, Box , Grid2} from "@mui/material";

//icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function AssessmentCard({ data }) {
  return (
    
    <Grid2 xs={12} sm={12} md={6} lg={6} xl={4}>
    <Card sx={{ marginBottom: 3, boxShadow: 3, borderRadius: 3 , minWidth: {  xs: "300px", sm: "550px" , md:"350px" , lg:"550px" } }}>
      <CardContent>

        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
            <Box display="flex" alignItems={"center"} gap={1}>
                <Chip
                label={data.type}
                sx={{
                    backgroundColor:
                      data.status === "Ongoing"
                        ? "whitesmoke"
                        : data.status === "Completed"
                        ? "#f2d7b6"
                        : "#c7e3c1",
                    color: "black", 
                  }}
                />
                <Typography  fontWeight={"bold"} color={data.status === "Ongoing" ? "success" : data.status === "Completed" ? "error" : "warning"}>{data.status}</Typography>
            </Box>
            <Box display="flex" alignItems={"center"} gap={1}>
                <PersonAddIcon  sx={{ color: "white", stroke: "#03a1fc", strokeWidth: 1 }}/>
                <OpenInNewIcon sx={{ color: "#03a1fc"}}/>
            </Box>
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {data.title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
            <CalendarMonthIcon fontSize="small" />
            <Typography variant="body2" color="textSecondary" marginBottom={0}>
              {data.date}
            </Typography>
        </Box>
        
        <Box display="flex" alignItems="center" gap={6} marginBottom={1}>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={0.5} marginBottom={1}>
              <MailOutlineIcon fontSize="small" /> {data.inviteType}
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={0.5} marginBottom={1}>
              <AccessTimeIcon fontSize="small" /> {data.duration}
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={0.5} marginBottom={1}>
              <QuestionAnswerIcon fontSize="small" /> {data.questions} Ques
            </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" overflow="hidden">
            <Box display="flex" alignItems="center" gap={1} sx={{ flex: "1 1 auto", minWidth: 0 }}>
                {data.participated &&(
                    <Box display="flex" alignItems="center" gap={1} sx={{ flexShrink: 0 }}>
                        <GroupIcon fontSize="small" />
                        <Typography fontSize={"14px"} noWrap>{data.invited} Invited, {data.participated} Participated</Typography>
                    </Box>)}
                    {data.status !== "Draft" ? (
                        <Typography fontSize={"14px"} color="#03a1fc" noWrap>
                            View Report
                        </Typography>
                    ) : (
                            <Typography fontSize={"14px"} color="#03a1fc" noWrap>
                                Review Questions
                            </Typography>
                    )}
            </Box>
            <Typography sx={{ display: { xs: "none" , md:"none" , sm:"block" , lg:"block" } }} fontSize={"14px"} color="#708090" noWrap>
                Created on: {data.createdOn}
            </Typography>
        </Box>

      </CardContent>
    </Card>
    </Grid2>
  );
}

export default AssessmentCard;
