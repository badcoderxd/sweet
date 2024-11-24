import { Icon } from "@iconify/react"

const { Box } = require("@mui/system")
const { default: MaxWidthComponent } = require("../common/WithMaxWidth")

const Languages = [
    {
        language: "JavaScript",
        description: "JavaScript is the programming language of the web.",
        icon: "skill-icons:javascript",
        color: "rgba(235, 235, 255, 1)",
        shortName:".js"
    },
    {
        language: "Python",
        description: "JavaScript is the programming language of the web.",
        icon: "logos:python",
        color: "rgba(225, 247, 227, 1)",
         shortName:".py"
    },
    {
        language: "JAVA",
        description: "JavaScript is the programming language of the web.",
        icon: "devicon:java",
        color: "rgba(255, 240, 240, 1)",
         shortName:".java"
    },
    {
        language: "C",
        description: "JavaScript is the programming language of the web.",
        icon: "devicon:c",
        color: "rgba(255, 242, 229, 1)",
        shortName:".js"
    }
]

const LanguageSection = () => {
    return(
        <Box>
            <MaxWidthComponent>
                <Box>
                    <Box sx={{
                            fontSize: "40px",
                            fontWeight: 600,
                            lineHeight: "48px",
                            letterSpacing: "-0.01em",
                            textAlign: "center"
                            }}>
                        Start Coding
                    </Box>

                    <Box>
                        <Box sx={{
                            width: "100%",
                            display: "grid",
                            gap: "16px",
                            padding: "16px",
                            gridTemplateColumns: "repeat(4, 1fr)"
                            }}>
                                {
                                    Languages.map((language, i) =>{
                                        return(
                                            <Box sx={{
                                                background:language.color, p:2, 
                                                display:"flex", alignItems:"center"}}>
                                               <Box sx={{mr:2}}>
                                                <Icon icon={language.icon} height={40} width={40} style={{transform:"translate(0px,5px)"}} />
                                               </Box>
                                               <Box>
                                                 <Box sx={{fontSize:"14px", fontWeight:700}}>{language.language}</Box>
                                                 <Box sx={{fontSize:"10px", color:"rgba(110, 116, 133, 1)"}}>{language.shortName}</Box>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                        </Box>
                    </Box>
                </Box>
            </MaxWidthComponent>
        </Box>
    )
}

export default LanguageSection;