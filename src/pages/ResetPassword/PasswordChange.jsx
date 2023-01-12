import illustration from "../../assets/illustration.png";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import { useParams } from "react-router-dom";

const PasswordChange = ({ backStep }) => {
  const { id } = useParams();

  const Reset = () => <ResetPassword />;

  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <Reset />
    </div>
  );
};

export default PasswordChange;
