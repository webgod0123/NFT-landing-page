import Flex from "../common/Flex";
import Image from "../common/Image";
import LogoImage from "../../assets/img/logo.png";
import Box from "../common/Box";
import InstagramImage from "../../assets/img/instagram.png";
import TwitterImage from "../../assets/img/twitter.png";
import DiscordImage from "../../assets/img/discord.png";

const Footer = () => {
  const socialIcons = [
    { icon: TwitterImage, link: "https://twitter.com/" },

    { icon: DiscordImage, link: "https://discord.com" },
    { icon: InstagramImage, link: "https://www.instagram.com/" },
  ];

  return (
    <Box
      styles={{
        zIndex: "10",
        position: "relative",
        backgroundColor: "#121212",
      }}
    >
      <Box
        cssClasses={["container", "py-4"]}
        styles={{
          borderTop: "1px solid #818181",
        }}
      >
        <div className="pb-4 d-md-flex align-items-center justify-content-md-between justify-content-center">
          <Box
            cssClasses={[
              "d-md-flex",
              "align-items-center",
              "text-center text-md-left",
            ]}
          >
            <Image src={LogoImage} width="180px" />
            <Box cssClasses={["py-3 py-md-0"]}>
              <span className="grey mx-4">
                <a href="" className="grey">
                  {" "}
                  Terms of Service
                </a>
              </span>
              <span className="grey mx-4">
                <a href="" className="grey">
                  Privacy Policy
                </a>
              </span>
            </Box>
          </Box>
          <Flex direction={"row"} justifyContent={"center"}>
            {socialIcons.map((icon, index) => (
              <Image key={index} cssClasses={["mx-3"]} src={icon.icon} />
            ))}
          </Flex>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
