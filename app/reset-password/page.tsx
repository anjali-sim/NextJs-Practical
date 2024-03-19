import FormWrapper from "../components/ui/Form/FormWrapper";
import Label from "../components/ui/Label/Label";
import InputComponent from "../components/ui/Input/InputComponent";
import Button from "../components/ui/Button/Button";

export default function ResetPassword() {
  return (
    <FormWrapper
      heading="Reset Password"
      content=""
    >
      <div>
        <div className="mt-3 p-6 pt-0">
          <form>
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="New Password" />
              </div>
              <InputComponent
                type="password"
                name="password"
              />
            </div>

            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="Confirm Password" />
              </div>
              <InputComponent
                type="password"
                name="password"
              />
            </div>
            <Button title="Change Password" isLogin={false} />
          </form>
        </div>
      </div>
    </FormWrapper>
  );
}
