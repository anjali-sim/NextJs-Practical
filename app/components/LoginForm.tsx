import Button from "./ui/Button/Button";
import Divider from "./ui/Divider/Divider";
import FormWrapper from "./ui/Form/FormWrapper";
import LoginInput from "./ui/Input/LoginInput";
import SocialSignInOptions from "./ui/SocialSignInOptions/SocialWrapper";
import LinkOptions from "./ui/Link/LinkOptions";

export default function LoginForm() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <FormWrapper
        heading="Login"
        content="Welcome back, enter your credentials to continue."
      >
        <SocialSignInOptions title="Sign In" />
        <Divider />

        <LoginInput>
          <Button title="Log In" isLogin={true} />
          <LinkOptions
            linkHref="/signup"
            title="Signup"
            description="Dont have an account?"
          />
        </LoginInput>
      </FormWrapper>
    </div>
  );
}
