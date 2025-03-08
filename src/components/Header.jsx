/* eslint-disable no-unused-vars */
import { AppBar, Toolbar, Typography, Avatar, IconButton, Badge, Box, useMediaQuery , useTheme } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from "react";

function Header() {
  const [notificationCount, setNotificationCount] = useState(2); // Dummy notification count
  const name = "Lipika";  // Dummy name

  const theme = useTheme(); // Access theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detect medium screen
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screen

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFF",
        boxShadow: "none" ,
        borderRadius: "20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Left Side */}
        {!isSmallScreen && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqXa-HzaumlIW1g15CR-wSnJGfNzI0DWBBg&s"
            alt="Microsoft"
            sx={{ width: 40, height: 40 , border: "1px solid rgba(0, 0, 0, 0.2)", 
        
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#074786"  }}>
            Microsoft Corporation
          </Typography>
        </Box>)}

        {/* Middle side */}
        <Box sx={{padding:"5px 15px" , backgroundColor:"whitesmoke" , borderRadius:"10px"}}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#074786"  }}>
                Assessment
            </Typography>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsNoneIcon sx={{ color: "black" }} />
            </Badge>
          </IconButton>
          {!isExtraSmallScreen && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              backgroundColor: "#F5F9FF",
              padding: "5px 5px 5px 15px",
              borderRadius: "40px",
            }}
          >
            <Typography sx={{ color: "black" }}>Hi {name}</Typography>
            <Avatar
              src="data:image/jpeg;base64,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"
              alt="User"
              sx={{ width: 40, height: 40 , border: "1px solid rgba(0, 0, 0, 0.2)"  }}
            />
          </Box>)}

          {isExtraSmallScreen && (
          <Box>
            <Avatar
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUREBESFRIQFRUXGBUXGBUXFhgXFRcWFhYVFRcYHSggGBslGxgWITEiJikrLi4uGCszODMtNygtLisBCgoKDg0OGxAQGi0lHx8tKysrLTY1LSstLy8rLS0rKy0tLS0tKy0tLS0tLS0tLS0rNS8rLS0tLS0tLS0tLS0tLf/AABEIANUA7AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAcCAwYFCAH/xABKEAABAwIBBwYJCQYFBQEAAAABAAIDBBETBQYSITFBUQciYXGBkRcyUmRyoaOx4xQjQmKCksHR8DNDU4OywhUkY6LSNERzk8MI/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EACwRAAICAQMEAAUDBQAAAAAAAAABAhEDBCExEiJBUQUTM3GxFGHwFSMygdH/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBEXAZ4Z6kEwUjtmp8o9bY/+XdxUWbNDFHqke8eOU3SOly5nPT0uqR2lJ/DZrd27m9q4jKXKBUvuIWsib1ab+92r1LknEk3JuTrJO0k7yvxYmbX5Zvt2X88mjDTQjzuT6nLVTJ49RMb7tNwHcDZQnyE7ST1klYoqTnKXLJ0kuDJkjh4riOokKXBleoZ4lRMLcJH27r2UJEUpLhhpPk6Siz4rY/Ge2QcHtHvbY9910+S+UOF9hURuiPlDns7bDSHcVWiKzj1uaHm/vuRS0+OXgvmlqmStD4nte07HNII9S3Ki8mZTmp36cEhYd4+i7oc3YVZma+eEdTaOW0c/D6L/AECd/wBU6+vWtbT66GXtezKWXTShut0dQiIrxWCIiAIiIAiIgCIiAIiIAiIgCIiAIigZdym2mgfO7XoDUPKcdTW9pIXG0lbOpW6Ry3KFnKYx8lhdaR4+ccNrWnY0cHEdw69VbhftRUOke6R5u95LnHiTrKxBXzWpzPNPqfHg1sWNQjRkiIq5KEREARFJoaCSYlsTC4tFzs2dvuRKwRkWUsbmktcC1w2gggjrBWKAIDvG0IiAszMfOzGtT1B+dA5jz+8A3H6wHeuzVAseWkOaSC0ggjUQRrBB3FXDmhl4VcN3WxY7NkHTueOgj1gjctzQav5i+XPlcfuZ2pw9PdHg91ERaRUCIiAIiIAiIgCIiAIiIAiIgCrTlTyrpSR0rTqjGI/0nXDQeptz9tWU42FzsCoTK9eZ55Zj+9eSPR2NHY0AdiofEMnTj6V5LOljcr9EYFZArAFZArDaNEzBWSwBWQK8HT9REQ6ZwQue4MYLucbAdJVm5ByS2niDBrcdb3cT+Q3Ly8zch4bceQc945oP0Wnf1n3dq6kBXcGKl1MhnPweflPJUU7bSsBO5w1OHUf0FwmXc3ZKfnDnxeUNo9IbuvZ1KyiFg9oIsRcHcveTCpHmM6KeRdLnTm9hXmhHzZ8Zvk9I+r7vdzSoSi4umTp2F6+a2VzS1DZCfm3c2QfUO/sNj2dK8hF2E3CSkuUJRUlTL+BvrG9fq5rMDKeNSNa48+A4Z6gOYfu2H2SulX1OOanBSXkxpx6ZNMIiL2eQiIgCIiAIiIAiIgCIiA8TPWtwaKdwNi5mgON5CGXHVpX7FSAVn8rVVo08UV9ckpd1hjTf1uaqzpW3cAdmv3LF+IzvJXpGhpY9v3PwFZArEtsbbwbKVFk6Zwu2J5HENKoUWTSCtsTC42HAnsGsrCSJzTZzSDwIsusyPkjQpZZXjnyRut0Nt+K4o2zpyoK6PNHImM/FkHzbDqHlO/JeTkXJrqiQMGz6R4BWjR07Y2BjBZrRYL3gxdTt8HmcqRIaFnZfjQtgC0kis2ayFg4LcQsHBJIJkaVgIIIuCLEHgVWmcGTPk8paPEdraejh2Kz3Lns8KLEgLgOdFzh1b/z7FTzwtE8GV8iIqRMdbya12hVGInVOwj7TLub6tPvVpKislVeDNHL/AA3tceoHnDuur1W58MyXjcfT/JnauNST9hERaRUCIiAIiIAiIgCIiAIiICrOVyovUQx+RE53/sdb/wCa46g8YngPevc5S59LKEg/hsjb/tD/AO4rw6PUOtfPa13ORq6ZVFHYZk0ET5JXvaHOZo6N9guNersXXWtqXJ5hSfOyDixp7ifzXXSDWVzH9NHuX+bIdbQRygB7QbEEdmtZVsd4ntG9pAHYpCLoIWQMltp4w36Ttbj08F67VqatrVNjVEcjc1bAFrYtzVaiV5GLgtTlvctLlyaOxNLlFqow5rmnY4Ed4Upy0uVaZPEqSVlnEHcSFipWVW2mkH13e9RVmPksBXdm9U4tLDJvdGy/pAWd6wVSKtfk4qNKia3+E97e86fueFpfDJVkcfa/BU1i7EzqERFuGcEREAREQBERAEREARFDyxlFlNDJPJ4sTSes7GtHSTYdq43SthblIZ21GJXVLv8AWe37h0P7VFiKhulLnF7jdziXE8STcnvW0SWC+czdzb9mxj7UdbmDN/mXjiy3cu9mGtVnmJLaqA8ofr3qzZgpILso8t91mpAiLh6NjVuatLVtapoEcje1bWlaGlbAVYiyCSM3FanLIla3FdkxFGty0uW1yjzus0ngCq0yeJV+VjeaT0ioq21T7vceLitSzHyWArG5K5vmp2eS9rvvNt/Yq5XdclT/AJydvFsZ+6X/APJXNA6zx/3+CDUr+2yxURF9EZQREQBERAERc9nFlitp7uhoG1EQ3smIkHXFhEn7JcuN0rOpWdCiqap5WZ7kNpImOBsQ9z3EHgRZpuvEr+ULKEotitjB3RNDf9zruHYVBLVY0SrBJly5XyzBSs06iVrBuB8Z3Q1o1uPUqdzzzvfXODWgsp2G7WHxnHy321X4AbL71zE07nuL5HOe87XOJc49bjrKMaTe2wbTuHWqWbUSmqWyLGPCo7+TMLK613WQKqNE57GbE2jUxnpt+P4K3pNipLJ8ujIx3Bw99ldFLJpRtPFo92tdh5QZiiIvJ7Mmrc0rQ1bWle4s8yRuaVmCtQKyBU6ZE0ZkrBxQlYko2cSMXFeblqbQheeheg4rm89KjRh0fKP6/FV8jpE0UcISiIqBMF2fJaf8xKP9L+9q4xdryWs+fldwjA73D8la0X14/wA8EOo+myykRF9IZIREQBERAEREBx3KBXUUIjNbRmdsukA9rWaTS22rSLmuFwTax+iVXdZNkV2tkWUY+hjoSPaOcVa2fGQfltI+JtsVpD47+W2+q+64Lm/aXz+5pBLXAhzSQQRYgjUQQdhBVHUtqXCLWGmj1ZqmkbfBp5XcDPKCPuQtZ/Uok9S5+2wA2NaA1ovwaNXbtO9RgVkCqcm2WEjMFZArAFZAqNo9GYKsvNHOJkjBE+zXN/XcqzBW2CZzCHNJDhsK88Hou57VguWzXzpEgEcupw/WriPWF1R16xvTk6j8CzaVgv0FEwzcCsrrUCsKmpbG0vfcNG0hrnW6SGgm3SpFI8NEi6xJXljOKlP/AHEffb3qPVZ0UzRzZQ48AHEdpAXHNezqiz1aidrBpONguAzmyqJ3gN8Vq/M4ssYtg17jx1WHUN9l4WkquWd7IljGjMlfixWYCgPYVg8lUP8A1D+OG0dmmT72qv1a3JxSaFGHHbM9z+wWYP6b9qvfDo3nT9X/AMK2qdY/udSiIvoDLCIiAIiIAiIgC5HO3MKnrSZWkwzna9ou11tmIzVc9IIPXZdcvw9C8yipKmdUmnaKXqeS6uaToGCQbiHuae0OaLd5XiZdzXqaNrXVDWNEhIbZ7XEkC51Dd+a77K/KZLTSugmyfoyM2jH5pB2OacLnNO4+4ghV/nRnLNXyiSUNa1gIYxt7NB26ztJsLnoCoZY4ku27LcHkb34PJBWQK1grMFVGiczBWQKwBWQK8NHTdC4hwI1EEe9WxRYjGBzec03uzeNZ1t/JVVQR6UjGje5vde59V1cVIzRY0cAPzXk9oygqGv8AFOveN46wti0T0jH6yLHyhqPeteBKPFkBHB4/Eayh0mArGWdrBdxA/W5RcKU+NI1o+qPxOxZxUbGm9i53lO1ldsUePXZCiqXaQjwr7XjU53To7O0heXUZkvH7OZp9Jpb6xf3LtEXhxT5OqTRWeVciS04BkMZvbxS47b8WjgvODV22fDfmwer+ofmuJBUE1T2PXUzMBfqxBWSjOmdPC57msYLue4NaOlxsPWr0oKVsUTIm+LG1rR9kWuq+5Ncil8hqnjmxXazpeRYu6gDbrPQrJW58Nw9MHN+fwZ2ryXLpXgIiLSKgREQBERAEREARF+EoDxs6M2IK6PQmFntvoSN8dhPDiDvB1dtiKdzizIq6MklhlhH72MEi3127WdurpKtXLXKBkyluJqyLTBtoRkyvvwLY7kdtlx+UuWYHVRUEz9ZGnO5sLfSDRpFw7lDkwxn9ySGRxK3aUfIGi7iAOJIA7ys8u5RqK1+JL8mgOu4po9Euvve9xJJ6V58eSoQbuBkdxeS71bPUq60bvdk36heEZOyxFezNKR3CNpd69i/RNUv8SFkY4yOufut1g9alxkNFmgAcAAB3BZYiljpca53I3nmybmJC/wDxKOOeXTD4pHNAAaNNpBLbDbzb61dKoqgq8KtopvIqGsJ4NmGg4+tXqqWsgozVcUWtNJuO4REVQsBZRsubLFbYpLL1Gr3OO62NkzA0dKjLJ7ydqjV1W2GN80hsyJjnuP1WAuPqC7J29ji2W5V2fmXKiWtlp6eVrYqZkbXBzQ5rpHfOE32iwLQepc8zKdSz9rTteN7onf2O1laMnzueHTSftKl75ndchv7rKViLU/R4nFKSM/587tMzizjgJAeXxOO6Rrm+vZ611eaeSTXyaMT2mJti+RpBDRwFtrjuC5BzgRYgEcDrCitoY2u04wY3jY6Nzo3Dq0SoP6bi6k7deiT9XOqPqCipWRRtijbosYAAOj8T0revnTJ+duVKe2FlCSRo+hUNbNfreef3FdPk3lhqmWFXQskG99PJo90clyfvLQSrZFUuRFweS+VzJctmySSUz3fRnjczZxc3SYO0rssn5Sgnbp080UrfKje1472kroJSIiAIiIAiKtuV/Ph1IwUVI61XUNJc8fuYthf6btYHCxOrUgNmfvKhHSPdS0TWz1Y1OJPzMJ/1CPGdf6At0kbDUOV8o1NYS6uqpZtI3w9IshFtY0Y22GrivMgaGCze07yd5J3lbMRAboImM8RrW9QF+9bcRRMRMRAS8RMRRMRMRAS8RMRRMRMRAMqOJicQbFtnA8C0h1/UvoLJlWJoYpm7Jo2PH22h34r58e64IOwgjv1K4OSysMuTINLxotOI/wAt5DR93RVHXR7Uy1pXu0daiIswvBERAFw/K7lHQohTtNn1kjY9W0MadOQ9VgAfSXcKl+U7KWNlHDB5lFGGfzJee8j7OiOxWNLDqyL9tyHPLph9zxQ+2obAv3EUTETEWyZpLxExFExExEBLxExFExExEBKc++o6xwK0RwBjhJC58Mg2SQuMbh1FqwxExEBZ2ZHKtIx7abKzmlriGsrAA0AnYKho1N9MauO8i4wV8mPIcCCLg7QrR5F89C1wyVVPJsCaWR20tbrMDjxaNbegW8kIC40REBFypXsp4ZKiU2jgY57j0MBJsN51bF8pZQyrJVTy1c37SpeXkeS3Yxg6GtAHYrj/AP0BlvDpIqNp51ZJd3/ihs53VdxZ3FUXiICXiJiKJiJiICXiJiKJiJiICXiJiKJiJiICXiJiKJiJiICXiKy+ROs5lXB5ErZR1Stsf6PWqpxF2fJBXaGUTGTqqIHttxcwh47mhyr6qN4mS4HU0XeiIsY0wiIgNNbVNijfLIbMiY57j9VgLj6gvm35Y6Vz5pPHqHvkd1vN7DoVvcsOVcGgwWmz6t7Y+nQHPkPVYBp9NUuHrT0MKi5eyjqpXKvRLxExFExExFeKpLxExFExExEBLxExFExExEBLxExFExExEBLxFi6VwLXxuLZI3Nexw2te03a4doUbETEQH1NmBnM3KNFHUiwk1slYPoys1PFtwOpw6HBdEvnXkUzl+S1/yZ7rQ19m69jZ2/sz0aQu3VtJbwX0UgPmDlhy78qypNom8dKBTt4XYSZD16ZcOoBcXiLu+VLk3nye91TBpzUcji4vN3SROcb2lO0gk6n9h12vXOIgJeImIomImIgJeImIomImIgJeImIomImIgJeImIomImIgJeIvWzPr8GvpZdzZmNPoycxx7nFc9iJi8DrGsdi5JWmjqdOz64RRMk1gnginGyaKN/32h34qWsBqjXQRFprKlsUb5ZDZkTXPceDWguJ7guApHljyvi14hB5tJGG/zJLPefu6A7Fw2IsMo5QdNNJO/wAaaR7z1vJNurWo+It7HDogo+jJnLqk2S8RMRRMRMRezyS8RMRRMRMRAS8RMRRMRMRAS8RMRRMRMRAS8RMRRMRMRASxMQQ5ri1zSHNcDYhzTcEHcbr60zFzhblChhqhbSe20gH0ZW814tuFxcdBC+S8lUE1TK2CmjfLLIbNY0XPWdwA3k6hvX0FmXyX1FLTaD8pVET3uMjo6fDw2uLWi13sJcbNGvUOjVcgWe9gcC1wBBBBB1gg7QRvCqTPrkZo3h9TSSOpiOc6MN04jx0Wkgs27jbgAiICvfBh537L4ieDDzv2XxERAPBh537L4ieDDzv2XxERAPBh537L4ieDDzv2XxERAPBh537L4ieDDzv2XxERAPBh537L4ieDDzv2XxERAWNm9WPpKaKmJEmA3R07FtxclvNubWBA27l6P+PyeSz1/miKq9Pjbton+dNbWBlyXgzuP5rzc5JJqumkphIyITAAvDCTo3BItp7wLdRRF6Wnxp2kceabVWV14MPO/ZfETwYed+y+IiKwQjwYed+y+Ingw879l8REQDwYed+y+Ingw879l8REQDwYed+y+Ingw879l8REQDwYed+y+Ingw879l8REQDwYed+y+IvVzc5HW1Emi+tcGtsToxC5HAEvIB6bFEQF2Zp5oUeTY9CkisXW05Hc6R9vLdw6BYdC95EQH//Z"
              alt="User"
              sx={{ width: 40, height: 40 , border: "1px solid rgba(0, 0, 0, 0.2)"  }}
            />
          </Box>)}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
