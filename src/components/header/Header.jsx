/* eslint-disable react/prop-types */
import { useContext } from "react";
import PopoverComponent from "../popover/Popover.component";
import Container from "../container/Container";
import { FaPeopleRoof } from "react-icons/fa6";
import Avatars from "../avator/Avator";
import useImage from "../../hooks/useImage";
import storage from "../../utils/storage";
import { ContactContext } from "../../context/Contact.context";
import { Link } from "react-router-dom";

const Header = () => {
  const { gender, id } = storage.getToken();
  const [getAvatar] = useImage();
  const { details } = useContext(ContactContext);

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between pt-2">
          <Link className="text-white text-3xl" to="/contacts">
            <FaPeopleRoof />
          </Link>
          <div className="md:w-1/3 w-3/4">
            {/* <img
              className=" w-auto"
              src="https://salapabikasbank.com.np/them_img/22-Dec-2020-10-12-36logo-main.png"
              alt="Your Company"
            /> */}
          </div>
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
