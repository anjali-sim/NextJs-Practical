import Button from "./auth-ui/Button/Button";
import Divider from "./auth-ui/Divider/Divider";
import FormWrapper from "./auth-ui/Form/FormWrapper";
import SignupInput from "./auth-ui/Input/SignupInput";
import SocialSignInOptions from "./auth-ui/SocialSignInOptions/SocialWrapper";
import LinkOptions from "./auth-ui/Link/LinkOptions";

export default function Form() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <FormWrapper heading="SignUp" content="Welcome, create your account.">
        <SocialSignInOptions title="Sign Up" />
        <Divider />

        <SignupInput>
          <Button title="Sign Up" />
          <LinkOptions
            linkHref="/login"
            title="Login"
            description="Already have an account?"
          />
        </SignupInput>
      </FormWrapper>
    </div>
  );
}
