import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";
import Star from "../assets/img/star.png";

export interface TeamProps {
  person: any;
  views: number;
  nftImage: any;
  bid: string;
  ending: string;
  index?: number;
  name: string;
}

const Team = ({
  person,
  views,
  nftImage,
  bid,
  ending,
  index,
  name,
}: TeamProps) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-12 team-card"
      data-aos="flip-down"
      data-aos-delay={index && 100 * (index + 1)}
      data-aos-duration="500"
    >
      <Box cssClasses={["py-3", "px-4", "team-card-container"]}>
        <Box cssClasses={["team-card-content"]}>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image cssClasses={["me-2"]} src={person} />
              <span>{name}</span>
            </Flex>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image cssClasses={["me-2"]} src={Star} />
              <p className="text-sm">{views}</p>
            </Flex>
          </Flex>

          <Image cssClasses={["mt-3"]} src={nftImage} width="100%" />
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            cssClasses={["mt-4"]}
          >
            <Box>
              <p className="grey text-sm">Current bid</p>
              <p>
                <b>{bid}</b>
              </p>
            </Box>
            <Box cssClasses={["text-end"]}>
              <p className="grey text-sm">Ending in</p>
              <p>
                <b>{ending}</b>
              </p>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Team;
