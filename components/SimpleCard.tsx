import React from "react";
import tw, { styled } from "twin.macro";

type CardProps = {
  id: string;
  title: string;
  image: string;
};

const SimpleCard = ({ id, title, image }: CardProps): JSX.Element => {
  return (
    <StyledCard href={`/podcast/${id}?name=${title}`} draggable="false">
      <CardImageBox>
        <CardImage
          src={image}
          alt={`Cover image for the show '${title}'`}
          draggable="false"
        ></CardImage>
      </CardImageBox>
      <CardInfo>
        <CardInfoHeader>{title}</CardInfoHeader>
      </CardInfo>
    </StyledCard>
  );
};

export default SimpleCard;

const StyledCard = styled.a`
  ${tw`cursor-pointer bg-[#FDE0D3] w-40 flex flex-col flex-grow items-center transition duration-150 ease-in-out rounded-lg shadow hover:shadow-md active:(border-2 border-black opacity-95 shadow-inner transform scale-95)`}
`;
const CardInfo = tw.div`flex-1 flex items-center pl-1 text-xs text-center sm:(text-base py-2 px-2)`;
const CardInfoHeader = tw.h2`font-bold pb-2`;
const CardImageBox = styled.div`
  & img {
    user-select: none;
    ${tw`rounded`}
  }
  ${tw`relative block p-4`}
  @media (max-width: 250px) {
    display: none;
  }
`;
const CardImage = tw.img``;