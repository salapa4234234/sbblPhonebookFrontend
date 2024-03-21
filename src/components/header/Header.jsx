import PopoverComponent from "../popover/Popover.component";
import Container from "../container/Container";
import { FaPeopleRoof } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between pt-2">
          <div>
            <PopoverComponent />
          </div>
          <div className="md:w-1/3 w-3/4">
            <img
              className=" w-auto"
              src="https://salapabikasbank.com.np/them_img/22-Dec-2020-10-12-36logo-main.png"
              alt="Your Company"
            />
          </div>
          <div className="text-white text-3xl p-3">
            <FaPeopleRoof />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
