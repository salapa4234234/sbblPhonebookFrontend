/* eslint-disable react/prop-types */
import { useContext } from "react";
import PopoverComponent from "../popover/Popover.component";
import Container from "../container/Container";
import Avatars from "../avator/Avator";
import useImage from "../../hooks/useImage";
import storage from "../../utils/storage";
import { ContactContext } from "../../context/Contact.context";
import { Link } from "react-router-dom";
import logo from "../../icons/1.png";

const Header = () => {
  const { gender, id } = storage.getToken();
  const [getAvatar] = useImage();
  const { details } = useContext(ContactContext);

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between pt-2">
          <Link className="text-white text-3xl" to="/contacts">
            <div className="max-w-[70px]">
              <img
                className=" w-full h-full object-cover"
                src={logo}
                alt="Your Company"
              />
            </div>
          </Link>

          <div className="text-white text-3xl p-3 flex items-center justify-between gap-1">
            <PopoverComponent id={id}>
              <Avatars url={getAvatar(gender)} />
            </PopoverComponent>
            <div className="text-white text-sm whitespace-nowrap">
              {`${details?.firstName} ${details?.lastName}`}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
