import Flex from "../../components/common/Flex";
import Box from "../../components/common/Box";
import Image from "../../components/common/Image";
import MainImage from "../../assets/img/image.png";
import Button from "../../components/common/Button";
import TitleImage from "../../assets/img/title.png";

import Person1 from "../../assets/img/person (1).png";
import Person2 from "../../assets/img/person (2).png";
import Person3 from "../../assets/img/person (3).png";
import NFT1 from "../../assets/img/nft (1).png";
import NFT2 from "../../assets/img/nft (2).png";
import NFT3 from "../../assets/img/nft (3).png";
import NFT4 from "../../assets/img/nft (4).png";
import NFT5 from "../../assets/img/nft (5).png";
import NFT6 from "../../assets/img/nft (6).png";
import Team, { TeamProps } from "../../components/Team";
import GoldenTicketImage from "../../assets/img/golden_ticket.png";
import BoxButton from "../../components/common/BoxButton";
import ArrowIcon from "../../assets/img/arrow.png";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import Bg1 from "../../assets/img/bg1.png";
import Bg2 from "../../assets/img/bg2.png";
import Pattern1 from "../../assets/img/pattern1.png";
import Pattern2 from "../../assets/img/pattern2.png";

const Home = () => {
  const cards: TeamProps[] = [
    {
      person: Person1,
      views: 213,
      nftImage: NFT1,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",
      name: "@knight",
    },
    {
      person: Person2,
      views: 213,
      nftImage: NFT2,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",
      name: "@knight",
    },
    {
      person: Person3,
      views: 213,
      nftImage: NFT3,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",

      name: "@knight",
    },
    {
      person: Person1,
      views: 213,
      nftImage: NFT4,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",
      name: "@knight",
    },
    {
      person: Person2,
      views: 213,
      nftImage: NFT5,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",
      name: "@knight",
    },
    {
      person: Person3,
      views: 213,
      nftImage: NFT6,
      bid: "0.54 ETH",
      ending: "12h 55m 2s",
      name: "@knight",
    },
  ];

  return (
    <>
      <Box cssClasses={["home-content"]}>
        <Image src={Bg1} cssClasses={["bg-1", "d-none", "d-md-block"]} />
        <div id="home" className="home-container">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box cssClasses={["col-md-6", "col-lg-5", "col-12"]}>
              <Image src={MainImage} width="100%" />
            </Box>
            <Box
              cssClasses={[
                "col-md-6",
                "col-lg-7",
                "col-12",
                "ps-md-4",
                "pe-md-4",
              ]}
            >
              <Flex direction="row" justifyContent="center">
                <Box cssClasses={["col-md-10 p-3 p-md-0"]}>
                  <div className="justify-content-md-end d-flex">
                    <h1>EXCLUSIVE</h1>
                    <Image
                      styles={{ marginTop: "-15px" }}
                      width="70px"
                      height="70px"
                      cssClasses={["title-image"]}
                      src={TitleImage}
                    />
                  </div>
                  <h3
                    className="gradient-text roboto-font text-md-end"
                    style={{ marginTop: "-30px" }}
                  >
                    newest NFT release
                  </h3>
                  <p
                    className="text-md-end roboto-font"
                    style={{ marginTop: "10%" }}
                  >
                    The <b className="poppins-font">BILLIONAIRE CLUB</b> is a
                    private collection of 10 000 billionaire apes NFTs—unique
                    digital collectibles. The apes are stored as ERC-721 tokens
                    on the Ethereum blockchain and hosted on IPFS. <br />{" "}
                    <span className="active">Reveal on October 20th.</span>
                  </p>
                  <form className="w-100 d-flex" style={{ marginTop: "5%" }}>
                    <input
                      className="w-100 me-2 roboto-font"
                      type="email"
                      placeholder="your@email.com"
                      required
                      autoFocus
                    />
                    <Button styles={{ fontSize: "28px" }} text="Register" />
                  </form>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </div>
        <div className="collection-section">
          <Image src={Bg2} cssClasses={["bg-2", "d-none", "d-md-block"]} />
          <Image
            src={Pattern1}
            cssClasses={["pattern1", "d-none", "d-md-block"]}
          />
          <Box cssClasses={["container"]}>
            <h1
              className="gradient-text gradient-text1"
              style={{ fontWeight: "600" }}
              data-aos="fade-up"
            >
              Collections
            </h1>
            <p className="roboto-font text-md" data-aos="fade-up">
              With more than 180+ hand drawn traits, each NFT is unique and
              comes with a membership to an exclusive group of successful
              investors. Join an ambitious ever-growing community with multiple
              benefits and utilities.
            </p>
            <Box cssClasses={["mt-4", "pt-4"]}>
              <Box cssClasses={["d-none", "d-md-block"]}>
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                  styles={{ margin: "0 -30px" }}
                >
                  {cards.map((card, index) => (
                    <Team
                      index={index}
                      person={card.person}
                      nftImage={card.nftImage}
                      views={card.views}
                      bid={card.bid}
                      ending={card.ending}
                      name={card.name}
                    />
                  ))}
                </Flex>
              </Box>
              <Box cssClasses={["d-md-none"]}>
                <Slider
                  {...{
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    nextArrow: <SliderArrow direction="next" />,
                    prevArrow: <SliderArrow direction="prev" />,
                  }}
                >
                  {cards.map((card, index) => (
                    <Team
                      index={index}
                      person={card.person}
                      nftImage={card.nftImage}
                      views={card.views}
                      bid={card.bid}
                      ending={card.ending}
                      name={card.name}
                    />
                  ))}
                </Slider>
              </Box>
            </Box>
          </Box>
        </div>
        <div
          className="gradient-bg"
          style={{ zIndex: "10", position: "relative" }}
        >
          <Box cssClasses={["container"]}>
            <Flex
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box cssClasses={["col-md-7", "py-4", "col-12"]}>
                <div data-aos="flip-right" data-aos-duration="1000">
                  <h3 className="orange fw-bold">The Golden Guests</h3>
                  <p className="mt-4 roboto-font text-md">
                    The Golden Guests edition by the Billionaire Club are the
                    rarest NFTs. They are all hand drawn and have no element in
                    common with the regular collection.
                  </p>
                  <Box cssClasses={["mt-4", "pt-3"]}>
                    <BoxButton
                      text="Join us to register for the Presale"
                      styles={{
                        fontSize: "34px",
                        fontWeight: "600",
                        marginLeft: "10px",
                      }}
                      cssClasses={["mt-4"]}
                    />
                  </Box>
                </div>
              </Box>
              <Box cssClasses={["col-md-5", "col-12"]}>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <Image width="100%" src={GoldenTicketImage} />
                </div>
              </Box>
            </Flex>
          </Box>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src={Pattern2}
            cssClasses={["pattern2", "d-none", "d-md-block"]}
          />
          <div className="signup-section container text-center">
            <h2 data-aos="fade-up">
              <span style={{ fontWeight: "600" }} className="gradient-text">
                Get Aped with Us!
              </span>
            </h2>
            <div data-aos="fade-up">
              <Flex
                direction={"row"}
                alignItems="center"
                justifyContent="center"
                cssClasses={["mt-3"]}
              >
                <h5 className="roboto-font me-3 gradient-border-bottom">
                  Sign up for our newsletter
                </h5>
                <Image
                  styles={{ marginTop: "20px" }}
                  width="44px"
                  src={ArrowIcon}
                />
              </Flex>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Home;
