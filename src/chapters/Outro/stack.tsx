import { Slide, SpectacleLogo } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";

const catppuccinLogo =
  "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png";

const viteLogo =
  // eslint-disable-next-line max-len
  "https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667";

const reactIcons =
  // eslint-disable-next-line max-len
  "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667";

export const StackSlide = () => (
  <Slide>
    <CommandHeading>{"tail stack.json"}</CommandHeading>
    <StyledStackListWrapper>
      <StyledStackListEntry>
        {"React"}
        <BiLogoReact size="50" fill="#149dca" />
      </StyledStackListEntry>
      <StyledStackListEntry>
        {"TypeScript"}
        <BiLogoTypescript size="50" fill="#3178c6" />
      </StyledStackListEntry>
      <StyledStackListEntry>
        {"Vite"}
        <img src={viteLogo} width={50} height={50} />
      </StyledStackListEntry>
      <StyledStackListEntry>
        {"Catppuccin"}
        <img src={catppuccinLogo} width={50} height={50} />
      </StyledStackListEntry>
      <StyledStackListEntry>
        {"React Icons"}
        <img src={reactIcons} width={50} height={50} />
      </StyledStackListEntry>
      <StyledStackListEntry>
        {"Spectacle"}
        <SpectacleLogo size={50} />
      </StyledStackListEntry>
    </StyledStackListWrapper>
  </Slide>
);

const StyledStackListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
const StyledStackListEntry = styled.div`
  display: flex;
  flex-direction: co;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 8px;
  font-size: 25px;
  color: ${colors.secondary};
  padding-top: 10px;
  padding-bottom: 10px;
`;
