import Button from "./ui/Button/Button";
import Divider from "./ui/Divider/Divider";
import FormWrapper from "./ui/Form/FormWrapper";
import SignupInput from "./ui/Input/SignupInput";
import SocialSignInOptions from "./ui/SocialSignInOptions/SocialWrapper";
import LinkOptions from "./ui/Link/LinkOptions";

export default function Form() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <FormWrapper heading="SignUp" content="Welcome, create your account.">
        <SocialSignInOptions title="Sign Up" />
        <Divider />

        <SignupInput>
          <Button title="Sign Up" isLogin={false} />
          <LinkOptions linkHref="/login" title="Login" description="Already have an account?" />
        </SignupInput>
      </FormWrapper>
    </div>
  );
}
