import Items from "../Header/Items/items";
import { HeaderContainer, Ul, UlMob } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Ul>
        <Items url="/" text="home"  title="home" />
        <Items url="/mouses" text="mouses" title="mouses" />
        <Items url="/keyboards" text="keyboards" title="keyboards" />
        <Items url="/headphones" text="headphones" title="headphones"/>
        <Items url="/mousepads" text="mouse pads" title="mouse pads" />
      </Ul>

      <UlMob>
      <Items url="/" text="⌂"  title="home" />
        <Items url="/mouses" text="🖰" title="mouses" />
        <Items url="/keyboards" text="🖮" title="keyboards"  />
        <Items url="/headphones" text="🎧" title="headphones" />
        <Items url="/mousepads" text="🏿"  title="mouse pads"/>

      </UlMob>
    </HeaderContainer>
  );
}
