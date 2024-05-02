import { Auth } from "../component/Auth";
import { Quote } from "../component/Quote";

const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup" />
        </div>
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
      ;
    </div>
  );
};

export default Signin;
