import React, { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="poiner"
        d={['none','none','none','block']}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="poiner"
        d={['none','none','none','block']}
      />
    </Flex>
  );
};

const height = {
  height: 500,
}

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu
      style={{ overflow: "hidden"}}
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      >
      {data.map((item) => (
        <Box key={item.id} width="880px" itemID={item.id} overflow="hidden" p="1">
          <Image
            alt='property'
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            style={height}
            sizes="(max-width: 500px) 100px, (max-width):1023px 400px, 1000px"
            />
        </Box>
      ))}
      </ScrollMenu>
  );
};
