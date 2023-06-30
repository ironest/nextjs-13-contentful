import './navbar.scss';
import Image from "next/image";

const Navbar = ({ blok }: { blok: any }) => {
  return (
    <div>
        <Image
        className="navbar-desktop"
          src={'https:' + blok.desktopImage.fields.file.url}
          alt="Preview of Navbar"
          width={2000}
          height={200}
          key={blok.desktopImage.id}
        />
        <Image
        className="navbar-tablet"
          src={'https:' + blok.tabletImage.fields.file.url}
          alt="Preview of Navbar"
          width={2000}
          height={200}
          key={blok.tabletImage.id}
        />
        <Image
        className="navbar-mobile"
          src={'https:' + blok.mobileImage.fields.file.url}
          alt="Preview of Navbar"
          width={2000}
          height={200}
          key={blok.mobileImage.id}
        />
    </div>
  );
};

export default Navbar;
