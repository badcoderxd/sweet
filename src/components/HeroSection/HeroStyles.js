export const HeroStyles = {
    heroWrapper:{
        background: "linear-gradient(180deg, rgba(240, 242, 245, 0) 0.02%, #F0F2F5 220.8%)"
    },
    heroMainWrapper:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {xs:"column", sm:"column",md:"row", lg:"row"}
    },
    leftSection:{display:"flex", height:"100%", justifyContent:"center", alignItems:"left", flexDirection:"column"},
    getStartedBtn:{
        background:"rgba(0, 152, 99, 1)", color:"white", textTransform:"none", fontSize:"12px",px:4, py:1, fontWeight:"bold",
        "&:hover":{
             background:"rgba(0, 152, 99, 0.9)"
        }
        },
    mainTextLine:{fontSize:"72px", lineHeight:"74px", fontWeight:"700"}
}