import MaxWidthComponent from "../common/WithMaxWidth";
import { HeroStyles } from "./HeroStyles";
import MainImage from "../../assets/Images.webp"
import { MAX_WIDTH_DESKTOP } from "@/config/ui-config";
import { LoadingButton } from "@mui/lab";

const { Box } = require("@mui/system")

const HeroSection = () => {

    const viewportWidth = window.innerWidth;
    // Calculate the left padding
    const leftPadding = Math.max((viewportWidth - MAX_WIDTH_DESKTOP) / 2, 0);

    return(
        <Box>
            <Box sx={HeroStyles.heroWrapper}>
                {/* <MaxWidthComponent> */}
                    <Box sx={HeroStyles.heroMainWrapper}>
                        <Box sx={{paddingLeft:leftPadding+"px", flexBasis:"50%"}}>
                                 <Box sx={HeroStyles.leftSection}>
                                        <Box sx={HeroStyles.mainTextLine}>Code Online <br/> for Free</Box>
                                        <Box sx={{py:4}}>
                                            Our mision is to help people to find the best course <br/>
                                            online and learn with expert anytime, anywhere.</Box>
                                        <Box>
                                            <LoadingButton sx={HeroStyles.getStartedBtn}>
                                                Start Coding
                                            </LoadingButton>
                                        </Box>
                                 </Box>
                        </Box>
                        <Box>
                                    <img src={MainImage.src} width={"100%"} height={"100%"} style={{transform:"translate(0px,-4px)"}}/>
                           
                        </Box>
                    </Box>
                {/* </MaxWidthComponent> */}
            </Box>
        </Box>
    )
}

export default HeroSection;
