import Items from "../Header/Items/items";
import { HeaderContainer, Ul } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Ul>
        <Items url="/" text="home" />
        <Items url="/mouses" text="mouses" />
        <Items url="/keyboards" text="keyboards" />
        <Items url="/headphones" text="headphones" />
        <Items url="/mousepads" text="mouse pads" />
      </Ul>
    </HeaderContainer>
  );
}
