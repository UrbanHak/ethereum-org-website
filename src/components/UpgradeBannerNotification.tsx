import React from "react"
import BannerNotification from "./BannerNotification"
import Emoji from "src/components/Emoji"
import Link from "./Link"
import { chakra, Center } from "@chakra-ui/react"

const StyledBannerNotification = chakra(BannerNotification)

const StyledEmoji = chakra(Emoji)

const UpgradeBannerNotification: React.FC = () => (
  <StyledBannerNotification display="flex" justifyContent="center" shouldShow>
    <StyledEmoji text=":megaphone:"  alignSelf="center" mr="1rem" flexShrink="0"/>
    <Center>
      <b>We've deprecated our use of 'Eth1' and 'Eth2' terms.</b>{" "}
      <Link to="https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/">
        Read the full announcement
      </Link>
    </Center>
  </StyledBannerNotification>
)

export default UpgradeBannerNotification
